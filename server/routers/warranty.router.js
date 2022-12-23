const express = require('express')
const { warrantyController } = require('../controllers/index')

const router = express.Router()

router.get("/", warrantyController.findAll)

router.get("/:storeID", warrantyController.defecetiveByStoreID)

module.exports = router
