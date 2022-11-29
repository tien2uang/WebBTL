const express = require('express')
const { serviceCenterController } = require('../controllers/index')

const router = express.Router()

router.get("/", serviceCenterController.findAll)

module.exports = router
