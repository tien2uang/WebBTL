const { authJwt } = require("../middleware");
const express = require("express");
const router = express.Router();
const {
  storeController,
  serviceCenterController,
  productController,
  orderController,
  warrantyController,
  WarehouseController
} = require("../controllers/index");


/*********************Warranty********************************* */
// thống kê bảo hành theo mã servicecenter
router.get(
  "/warranty/servicecenter/:servicecenterID",
  [authJwt.verifyToken, authJwt.isFactory],
  warrantyController.defecetiveByServicecenterID
)
// thống kê bảo hành theo mã store
router.get(
  "/warranty/store/:storeID",
  [authJwt.verifyToken, authJwt.isFactory],
  warrantyController.defecetiveByStoreID
)
// thống kê bảo hành theo mã productline
router.get(
  "/warranty/productline/:productline",
  [authJwt.verifyToken, authJwt.isFactory],
  warrantyController.defecetiveByProductLine
)

/*********************Orders By Time********************************* */
// thống kê sản phẩm bán được theo quý
router.get(
  "/order/sales/quarter/:quarter",
  [authJwt.verifyToken, authJwt.isFactory],
  orderController.salesByQuarter
)
// thống kê sản phẩm bán được theo tháng
router.get(
  "/order/sales/month/:month",
  [authJwt.verifyToken, authJwt.isFactory], 
  orderController.salesByMonth
);
// thống kê sản phẩm bán được theo năm
router.get(
  "/order/sales/year/:year",
  [authJwt.verifyToken, authJwt.isFactory], 
  orderController.salesByYear
);


/*********************View By Time********************************* */
// thống kê sản phẩm theo quý (ngày nhập - importDate)
router.get(
  "/product/view/quarter/:quarter",
  [authJwt.verifyToken, authJwt.isFactory],
  productController.viewByQuarter
)
// thống kê sản phẩm theo tháng (ngày nhập - importDate)
router.get(
  "/product/view/month/:month",
  [authJwt.verifyToken, authJwt.isFactory], 
  productController.viewByMonth
);
// thống kê sản phẩm theo năm (ngày nhập - importDate)
router.get(
  "/product/view/year/:year",
  [authJwt.verifyToken, authJwt.isFactory], 
  productController.viewByYear
);

/*********************sold/unsold********************************* */
// thống kê sản phẩm đã bán
router.get(
  "/product/sold",
  [authJwt.verifyToken, authJwt.isFactory], 
  productController.getSold
);
// thống kê sản phẩm chưa bán
router.get(
  "/product/unsold",
  [authJwt.verifyToken, authJwt.isFactory], 
  productController.Unsold
);

/*********************Warehouse********************************* */
// lấy thông tin tất cả kho
router.get(
  "/warehouse/findall",
  [authJwt.verifyToken, authJwt.isFactory], 
  WarehouseController.findAll
)
// lấy thông tin từng kho
router.get(
  "/warehouse/find/:warehouseID",
  [authJwt.verifyToken, authJwt.isFactory], 
  WarehouseController.findOne
)
// nhập sản phẩm mới vào kho
router.post(
  "/warehouse/import",
  [authJwt.verifyToken, authJwt.isFactory], 
  WarehouseController.create
)

/*********************Export to store********************************* */
// xuất sản phẩm cho store
router.post(
  "/store/export",
  [authJwt.verifyToken, authJwt.isFactory],
  storeController.create
);

/*********************Receive from service center********************************* */
// nhận sản phẩm lỗi từ service center
router.get(
  "/servicecenter/receive",
  [authJwt.verifyToken, authJwt.isFactory],
  serviceCenterController.receive
);

module.exports = router;