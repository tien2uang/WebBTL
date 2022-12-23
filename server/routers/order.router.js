const express = require('express')
const { orderController } = require('../controllers/index')

const router = express.Router()

router.get("/", orderController.findAll)

router.get("/:quarter", orderController.sellByQuarter)


module.exports = router
