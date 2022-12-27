const { authJwt } = require("../middleware");
const express = require("express");
const router = express.Router();
const {
  factoryController,
  storeController,
  serviceCenterController,
  productlineController,
  productController,
  orderController,
  warrantyController,
  productRecallController
} = require("../controllers/index");


/**********************Productline******************************** */
// lấy hết mã dòng sản phẩm
router.get(
  "/productline/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  productlineController.findAll
);
// lấy từng mã dòng sản phẩm
router.get(
  "/productline/find/:productLine",
  [authJwt.verifyToken, authJwt.isAdmin],
  productlineController.findOne
);
// tạo mã dòng sản phẩm
router.post(
  "/productline/create",
  [authJwt.verifyToken, authJwt.isAdmin],
  productlineController.create
);
// update mã dòng sản phẩm
router.put(
  "/productline/update", 
  [authJwt.verifyToken, authJwt.isAdmin],
  productlineController.update
);
// xoá mã dòng sản phẩm
router.delete(
  "/productline/delete", 
  [authJwt.verifyToken, authJwt.isAdmin],
  productlineController.delete
);


/*****************Product************************************* */
// tương tự bên trên với product
router.get(
  "/product/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  productController.findAll
);

router.get(
  "/product/find/:productID",
  [authJwt.verifyToken, authJwt.isAdmin],
  productController.findOne
);

router.post(
  "/product/create",
  [authJwt.verifyToken, authJwt.isAdmin],
  productController.create
);

router.put(
  "/product/update", 
  [authJwt.verifyToken, authJwt.isAdmin],
  productController.update
);

router.delete(
  "/product/delete", 
  [authJwt.verifyToken, authJwt.isAdmin],
  productController.delete
);

/******************Factory************************************ */
// tương tự với factory
router.get(
  "/factory/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  factoryController.findAll
);

router.get(
  "/factory/find/:factoryID",
  [authJwt.verifyToken, authJwt.isAdmin],
  factoryController.findOne
);

router.post(
  "/factory/create",
  [authJwt.verifyToken, authJwt.isAdmin],
  factoryController.create
);

router.put(
  "/factory/update", 
  [authJwt.verifyToken, authJwt.isAdmin],
  factoryController.update
);

router.delete(
  "/factory/delete", 
  [authJwt.verifyToken, authJwt.isAdmin],
  factoryController.delete
);

/******************Store************************************ */
// tương tự với store
router.get(
  "/store/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  storeController.findAll
);

router.get(
  "/store/find/:storeID",
  [authJwt.verifyToken, authJwt.isAdmin],
  storeController.findOne
);

router.post(
  "/store/create",
  [authJwt.verifyToken, authJwt.isAdmin],
  storeController.create
);

router.put(
  "/store/update", 
  [authJwt.verifyToken, authJwt.isAdmin],
  storeController.update
);

router.delete(
  "/store/delete", 
  [authJwt.verifyToken, authJwt.isAdmin],
  storeController.delete
);

/*********************Service center********************************* */
// tương tự với Service center
router.get(
  "/servicecenter/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  serviceCenterController.findAll
);

router.get(
  "/servicecenter/find/:servicecenterID",
  [authJwt.verifyToken, authJwt.isAdmin],
  serviceCenterController.findOne
);

router.post(
  "/servicecenter/create",
  [authJwt.verifyToken, authJwt.isAdmin],
  serviceCenterController.create
);

router.put(
  "/servicecenter/update", 
  [authJwt.verifyToken, authJwt.isAdmin],
  serviceCenterController.update
);

router.delete(
  "/servicecenter/delete", 
  [authJwt.verifyToken, authJwt.isAdmin],
  serviceCenterController.delete
);


/*********************Sales********************************* */
// lấy thông tin sales 
router.get(
  "/sales/status",
  [authJwt.verifyToken, authJwt.isAdmin],
  orderController.getSales
);
// lấy thông tin sales từ toàn bộ factory
router.get(
  "/sales/factory/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  orderController.getSalesByFactoriesAll
);
// lấy thông tin sales từ từng factory
router.get(
  "/sales/factory/find/:factoryID",
  [authJwt.verifyToken, authJwt.isAdmin],
  orderController.getSalesByFactories
);
// lấy thông tin sales từ toàn bộ store
router.get(
  "/sales/store/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  orderController.getSalesByStoreAll
);
// lấy thông tin sales từ từng store
router.get(
  "/sales/store/find/:storeID",
  [authJwt.verifyToken, authJwt.isAdmin],
  orderController.getSalesByStore
);

/*********************Warranty********************************* */
// lấy thông tin bảo hành (tương tự bên trên)
router.get(
  "/warranty/servicecenter/find/:servicecenterID",
  [authJwt.verifyToken, authJwt.isAdmin],
  warrantyController.defecetiveByServicecenterID
)

router.get(
  "/warranty/productline/find/:productline",
  [authJwt.verifyToken, authJwt.isAdmin],
  warrantyController.defecetiveByProductLine
)

router.get(
  "/warranty/store/find/:storeID",
  [authJwt.verifyToken, authJwt.isAdmin],
  warrantyController.defecetiveByStoreID
)

router.get(
  "/warranty/servicecenter/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  warrantyController.defecetiveByServicecenterAll
)

router.get(
  "/warranty/productline/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  warrantyController.defecetiveByProductLineAll
)

router.get(
  "/warranty/store/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  warrantyController.defecetiveByStoreAll
)

/*********************product recall********************************* */
// lấy thông tin triệu hồi (tương tự bên trên)
router.get(
  "/recall/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  productRecallController.allRecall
)

router.get(
  "/recall/productline/find/:productline",
  [authJwt.verifyToken, authJwt.isAdmin],
  productRecallController.recallByProductLine
)

router.get(
  "/recall/productline/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  productRecallController.recallByProductLineAll
)

router.get(
  "/recall/servicecenter/find/:servicecenterID",
  [authJwt.verifyToken, authJwt.isAdmin],
  productRecallController.recallByServiceCenter
)

router.get(
  "/recall/servicecenter/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  productRecallController.recallByServiceCenterAll
)

router.get(
  "/recall/store/find/:storeID",
  [authJwt.verifyToken, authJwt.isAdmin],
  productRecallController.recallByStore
)

router.get(
  "/recall/store/findall",
  [authJwt.verifyToken, authJwt.isAdmin],
  productRecallController.recallByStoreAll
)


module.exports = router;
