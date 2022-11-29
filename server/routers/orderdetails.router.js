const express = require('express')
const { orderdetailsController } = require('../controllers/index')

const router = express.Router()

router.get("/", orderdetailsController.findAll)

module.exports = router
