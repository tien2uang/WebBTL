const { authJwt } = require("../middleware");
const express = require("express");
const {
  serviceCenterController,
  productController,
  orderController,
  warrantyController,
  productRecallController,
  TransactionController
} = require("../controllers/index");
const router = express.Router();


// Nhận các sản phẩm bảo hành hoặc triệu hồi từ đại lý.
// router.get(
//   "/warranty/receive",
//   [authJwt.verifyToken, authJwt.isServiceCenter],
//   TransactionController.
// );

router.get(
  "/warranty/store/findall",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.defecetiveByStoreAll
);

router.get(
  "/warranty/store/find/:storeID",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.defecetiveByStoreID
);

router.get(
  "/warranty/servicecenter/findall",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.defecetiveByServicecenterAll
);

router.get(
  "/warranty/servicecenter/find/:servicecenterID",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.defecetiveByServicecenterID
);

router.get(
  "/warranty/productline/findall",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.defecetiveByProductLineAll
);

router.get(
  "/warranty/productline/find/:productline",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.defecetiveByProductLine
);

// trieu hoi
router.get(
  "/recall/findall",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  productRecallController.allRecall
);

router.get(
  "/recall/productline/find/:productline",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  productRecallController.recallByProductLine
);

router.get(
  "/recall/productline/findall",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  productRecallController.recallByProductLineAll
);

router.get(
  "/recall/servicecenter/find/:servicecenterID",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  productRecallController.recallByServiceCenter
);

router.get(
  "/recall/servicecenter/findall",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  productRecallController.recallByServiceCenterAll
);

router.get(
  "/recall/store/find/:storeID",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  productRecallController.recallByStore
);

router.get(
  "/recall/store/findall",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  productRecallController.recallByStoreAll
);

//tra spp cho store
router.delete(
  "/return/store",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.delete
);

// chuyen sp loi ve factory
router.get(
  "/return/factory",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.return
);

/*********************View By Time********************************* */
router.get(
  "/warranty/view/quarter/:quarter",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.warrantyByQuarter
);
router.get(
  "/warranty/view/month/:month",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.warrantyByMonth
);
router.get(
  "/warranty/view/year/:year",
  [authJwt.verifyToken, authJwt.isServiceCenter],
  warrantyController.warrantyByYear
);

module.exports = router;
