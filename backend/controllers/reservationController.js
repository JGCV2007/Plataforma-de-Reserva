const prisma = require('../config/prisma')
const crypto = require('crypto')
const { reservationSchema } = require('../validations/reservationValidation')

function parseReservationDate(date, time) {
  const parsed = new Date(`${date}T${time}:00`)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

exports.list = async (req, res) => {
  try {
    const reservations = await prisma.reservation.findMany({
      where: { userId: req.userId },
      orderBy: { date: 'asc' }
    })

    return res.json(reservations)
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.create = async (req, res) => {
  try {
    const validation = reservationSchema.safeParse(req.body)

    if (!validation.success) {
      return res.status(400).json({
        errors: validation.error.issues
      })
    }

    const { date, time } = req.body
    const reservationDate = parseReservationDate(date, time)

    if (!reservationDate) {
      return res.status(400).json({
        error: 'Data ou hora inválida'
      })
    }

    const existingReservation = await prisma.reservation.findFirst({
      where: {
        date: reservationDate
      }
    })

    if (existingReservation) {
      return res.status(400).json({
        error: 'Horario indisponivel'
      })
    }

    const token = crypto.randomUUID()

    const reservation = await prisma.reservation.create({
      data: {
        date: reservationDate,
        token,
        userId: req.userId
      }
    })

    return res.status(201).json(reservation)
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.confirmById = async (req, res) => {
  try {
    const { id } = req.params

    const reservation = await prisma.reservation.findUnique({
      where: { id }
    })

    if (!reservation) {
      return res.status(404).json({
        error: 'Reserva nao encontrada'
      })
    }

    await prisma.reservation.update({
      where: { id },
      data: {
        status: 'CONFIRMED'
      }
    })

    return res.json({
      message: 'Reserva confirmada'
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

exports.confirmByToken = async (req, res) => {
  try {
    const { token } = req.params

    const reservation = await prisma.reservation.findUnique({
      where: { token }
    })

    if (!reservation) {
      return res.status(404).json({
        error: 'Reserva nao encontrada'
      })
    }

    await prisma.reservation.update({
      where: { token },
      data: {
        status: 'CONFIRMED'
      }
    })

    return res.json({
      message: 'Reserva confirmada'
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}