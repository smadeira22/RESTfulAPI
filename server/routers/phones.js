const express = require('express')
const router = express.Router()

const phonesController = require('../controllers/phones')

router.get('/', phonesController.index)
router.get('/:id', phonesController.show)
router.post('/', phonesController.create)
router.patch('/:id', phonesController.update)
router.delete('/:id', phonesController.destroy)

module.exports = router
