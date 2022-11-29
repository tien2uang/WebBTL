const express = require('express')
const { factoryController } = require('../controllers/index')

const router = express.Router()

router.get("/", factoryController.findAll)

module.exports = router