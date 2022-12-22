const express = require('express')
const { storeController } = require('../controllers/index')

const router = express.Router()

router.get("/", storeController.findAll)
router.get("/:storeID", storeController.findOne)
router.post("/", storeController.create)
router.put("/:storeID", storeController.update);
router.delete("/:storeID", storeController.delete);

module.exports = router
