const express = require('express')
const { productRecallController } = require('../controllers/index')

const router = express.Router()

router.get("/", productRecallController.findAll)

module.exports = router
