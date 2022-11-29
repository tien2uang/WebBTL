const express = require('express')
const { warrantyController } = require('../controllers/index')

const router = express.Router()

router.get("/", warrantyController.findAll)

module.exports = router
