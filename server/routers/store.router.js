const express = require('express')
const { storeController } = require('../controllers/index')

const router = express.Router()

router.get("/", storeController.findAll)

module.exports = router
