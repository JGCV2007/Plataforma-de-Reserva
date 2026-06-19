const { z } = require('zod')

const reservationSchema = z.object({
  date: z
    .string()
    .min(1, 'Data inválida'),
  time: z
    .string()
    .regex(/^([0-1]\d|2[0-3]):[0-5]\d$/, 'Hora inválida')
})

module.exports = {
  reservationSchema
}