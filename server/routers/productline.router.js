const express = require('express')
const { productlineController } = require('../controllers/index')

const router = express.Router()

router.get("/", productlineController.findAll)

module.exports = router