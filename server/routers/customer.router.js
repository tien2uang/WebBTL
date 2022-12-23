const { authJwt } = require("../middleware");
const express = require('express')
const { customerController } = require('../controllers/index')

const router = express.Router()

router.get("/", customerController.findAll)

module.exports = router
