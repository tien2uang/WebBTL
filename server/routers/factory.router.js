const express = require('express')
const { factoryController } = require('../controllers/index')

const router = express.Router()

router.get("/", factoryController.findAll)
router.get("/:factoryID", factoryController.findOne)
router.post("/", factoryController.create)
router.put("/:factoryID", factoryController.update);
router.delete("/:factoryID", factoryController.delete)

module.exports = router