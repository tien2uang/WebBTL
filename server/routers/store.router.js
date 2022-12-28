const express = require('express')
const { authJwt } = require("../middleware");

const {
    storeController,
    orderController,
    productController,
    warrantyController,
    productRecallController
} = require('../controllers/index')

const router = express.Router()


// bans sp cho kh
router.get(
    "/",
    [authJwt.verifyToken, authJwt.isStore],
    storeController.findAll
)

// 
router.post(
    "/order/create",
    [authJwt.verifyToken, authJwt.isStore],
    orderController.create
)
// thống kê sản phẩm theo quys (ngày nhập - importDate)
router.get(
    "/product/view/quarter/:quarter",
    [authJwt.verifyToken, authJwt.isStore],
    productController.viewByQuarter
)
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
)
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



router.post(
    "/warranty/send",
    [authJwt.verifyToken, authJwt.isStore],
    warrantyController.create
);



/** trieu hoi */
router.get(
    "/allRecall/recall",
    [authJwt.verifyToken, authJwt.isStore],
    productRecallController.allRecall
);

router.get(
    "/recallByProductLine/:productline",
    [authJwt.verifyToken, authJwt.isStore],
    productRecallController.recallByProductLine
);

router.get(
    "/recallByProductLineAll/recall",
    [authJwt.verifyToken, authJwt.isStore],
    productRecallController.recallByProductLineAll
);
router.get(
    "/recallByServiceCenter/:servicecenterID",
    [authJwt.verifyToken, authJwt.isStore],
    productRecallController.recallByServiceCenter
);

router.get(
    "/recallByServiceCenterAll/recall",
    [authJwt.verifyToken, authJwt.isStore],
    productRecallController.recallByServiceCenterAll
);

router.get(
    "/recallByStore/:storeID",
    [authJwt.verifyToken, authJwt.isStore],
    productRecallController.recallByStore
);

router.get(
    "/recallByStoreAll/recall",
    [authJwt.verifyToken, authJwt.isStore],
    productRecallController.recallByStoreAll
);



module.exports = router


