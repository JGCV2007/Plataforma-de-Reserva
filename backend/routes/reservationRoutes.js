const router = require('express').Router()

const authMiddleware = require('../middlewares/authMiddleware')

const reservationController = require('../controllers/reservationController')

router.get('/', authMiddleware, reservationController.list)
router.post('/', authMiddleware, reservationController.create)
router.patch('/:id/confirm', authMiddleware, reservationController.confirmById)
router.get('/confirm/:token', reservationController.confirmByToken)

module.exports = router