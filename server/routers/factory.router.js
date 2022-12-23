const { authJwt } = require("../middleware");
const express = require("express");
const router = express.Router();
const {
  factoryController,
  productlineController,
  productController,
  orderController,
  warrantyController
} = require("../controllers/index");


router.get(
  "/warranty/servicecenter/:servicecenterID",
  [authJwt.verifyToken, authJwt.isFactory],
  warrantyController.defecetiveByServicecenterID
)

router.get(
  "/receive/:servicecenterID",
  [authJwt.verifyToken, authJwt.isFactory],
  warrantyController.receiveFromServiceCenter
)

router.get(
  "/warranty/store/:storeID",
  [authJwt.verifyToken, authJwt.isFactory],
  warrantyController.defecetiveByStoreID
)

router.get(
  "/warranty/productline/:productline",
  [authJwt.verifyToken, authJwt.isFactory],
  warrantyController.defecetiveByProductLine
)

router.get(
  "/order/sell/quarter/:quarter",
  [authJwt.verifyToken, authJwt.isFactory],
  orderController.sellByQuarter
)

router.get(
  "/order/sell/month/:month",
  [authJwt.verifyToken, authJwt.isFactory], 
  orderController.sellByMonth
);

router.get(
  "/order/sell/year/:year",
  [authJwt.verifyToken, authJwt.isFactory], 
  orderController.sellByYear
);

router.get(
  "/productline",
  [authJwt.verifyToken, authJwt.isFactory],
  productlineController.findAll
);

router.get(
  "/findall",
  [authJwt.verifyToken, authJwt.isFactory],
  factoryController.findAll
);

router.get(
  "/:factoryID",
  [authJwt.verifyToken, authJwt.isFactory],
  factoryController.findOne
);

router.post(
  "/create",
  [authJwt.verifyToken, authJwt.isFactory],
  factoryController.create
);

router.post(
  "/addproduct",
  [authJwt.verifyToken, authJwt.isFactory],
  productController.addProduct
);

router.post(
  "/exporttostore",
  [authJwt.verifyToken, authJwt.isFactory],
  productlineController.exportToStore
);

module.exports = router;