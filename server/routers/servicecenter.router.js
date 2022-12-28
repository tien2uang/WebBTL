const { authJwt } = require("../middleware");
const express = require('express')
const {
    serviceCenterController,
    productController,
    orderController,
    warrantyController,
    productRecallController
} = require('../controllers/index');
const router = express.Router()

router.get("/", serviceCenterController.findAll)


// thống kê sản phẩm theo quys (ngày nhập - importDate)
router.get(
    "/product/view/quarter/:quarter",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productController.viewByQuarter
)
// thống kê sản phẩm theo tháng (ngày nhập - importDate)
router.get(
    "/product/view/month/:month",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productController.viewByMonth
);
// thống kê sản phẩm theo năm (ngày nhập - importDate)
router.get(
    "/product/view/year/:year",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productController.viewByYear
);
router.get(
    "/view/sales",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    orderController.getSales
);

//Nhận các sản phẩm bảo hành hoặc triệu hồi từ đại lý.
router.get(
    "/warranty/receive",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    warrantyController.defecetiveByServicecenterAll
);

router.get(
    "/warranty/recall",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productRecallController.allRecall
);

router.get(
    "/recallByProductLine/recall",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productRecallController.recallByProductLine
);

router.get(
    "/recallByProductLineAll/recall",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productRecallController.recallByProductLineAll
);
router.get(
    "/recallByServiceCenter/recall",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productRecallController.recallByServiceCenter
);

router.get(
    "/recallByServiceCenterAll/recall",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productRecallController.recallByServiceCenterAll
);

router.get(
    "/recallByStore/recall",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productRecallController.recallByStore
);

router.get(
    "/recallByStoreAll/recall",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    productRecallController.recallByStoreAll
);


//tra spp cho store
router.delete(
    "/recallByStoreAll/:warrantyStatus",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    warrantyController.delete
);

// chuyen sp loi k the sua ve factory
router.get(
    "/returnproduct",
    [authJwt.verifyToken, authJwt.isServiceCenter],
    warrantyController.return
);





module.exports = router
