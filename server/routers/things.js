const express = require('express')
const router = express.Router()

const thingsController = require('../controllers/things')

router.get('/', thingsController.index)
router.get('/:id', thingsController.show)
router.post('/', thingsController.create)

module.exports = router
