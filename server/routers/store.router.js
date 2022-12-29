const express = require("express");
const { authJwt } = require("../middleware");
const {
  storeController,
  orderController,
  productController,
  productRecallController,
  ExportToStoreWarehouseController,
  TransactionController,
  sendToServiceCenterController,
} = require("../controllers/index");

const router = express.Router();

router.get(
  "/findall",
  [authJwt.verifyToken, authJwt.isStore],
  storeController.findAll
);

// export to store's warehouse
router.post(
  "/storewarehouse/export",
  [authJwt.verifyToken, authJwt.isStore],
  ExportToStoreWarehouseController.create
);

// store's warehouse successfully received
router.post(
  "/storewarehouse/receive",
  [authJwt.verifyToken, authJwt.isStore],
  TransactionController.exportToStoreWarehouse
);

// ban sp
router.post(
  "/sell",
  [authJwt.verifyToken, authJwt.isStore],
  orderController.create
);

// thống kê sản phẩm theo quys (ngày nhập - importDate)
router.get(
  "/product/view/quarter/:quarter",
  [authJwt.verifyToken, authJwt.isStore],
  productController.viewByQuarter
);

// thống kê sản phẩm theo tháng (ngày nhập - importDate)
router.get(
  "/product/view/month/:month",
  [authJwt.verifyToken, authJwt.isStore],
  productController.viewByMonth
);

// thống kê sản phẩm theo năm (ngày nhập - importDate)
router.get(
  "/product/view/year/:year",
  [authJwt.verifyToken, authJwt.isStore],
  productController.viewByYear
);

// thống kê sản phẩm bán được theo quý
router.get(
  "/order/sales/quarter/:quarter",
  [authJwt.verifyToken, authJwt.isStore],
  orderController.salesByQuarter
);

// thống kê sản phẩm bán được theo tháng
router.get(
  "/order/sales/month/:month",
  [authJwt.verifyToken, authJwt.isStore],
  orderController.salesByMonth
);

// thống kê sản phẩm bán được theo năm
router.get(
  "/order/sales/year/:year",
  [authJwt.verifyToken, authJwt.isStore],
  orderController.salesByYear
);

// gửi cho TTBH
router.post(
  "/warranty/send",
  [authJwt.verifyToken, authJwt.isStore],
  sendToServiceCenterController.create
);

/** trieu hoi */
router.get(
  "/recall/findall",
  [authJwt.verifyToken, authJwt.isStore],
  productRecallController.allRecall
);

router.get(
  "/recall/productline/find/:productline",
  [authJwt.verifyToken, authJwt.isStore],
  productRecallController.recallByProductLine
);

router.get(
  "/recall/productline/findall",
  [authJwt.verifyToken, authJwt.isStore],
  productRecallController.recallByProductLineAll
);
router.get(
  "/recall/servicecenter/find/:servicecenterID",
  [authJwt.verifyToken, authJwt.isStore],
  productRecallController.recallByServiceCenter
);

router.get(
  "/recall/servicecenter/findall",
  [authJwt.verifyToken, authJwt.isStore],
  productRecallController.recallByServiceCenterAll
);

router.get(
  "/recall/store/find/:storeID",
  [authJwt.verifyToken, authJwt.isStore],
  productRecallController.recallByStore
);

router.get(
  "/recall/store/findall",
  [authJwt.verifyToken, authJwt.isStore],
  productRecallController.recallByStoreAll
);

module.exports = router;
