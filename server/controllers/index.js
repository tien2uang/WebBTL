const factoryController = require('./factory.controller')
const orderController = require('./order.controller')
const productRecallController = require('./product_recall.controller')
const productController = require('./product.controller')
const productlineController = require('./productline.controller')
const serviceCenterController = require('./servicecenter.controller')
const storeController = require('./store.controller')
const warrantyController = require('./warranty.controller')
const AuthController = require('./auth.controller')
const requestController = require('./request.controller')
const WarehouseController  = require('./warehouse.controller')
const TransactionController  = require('./transaction.controller')
const ExportToWarehouseController = require('./exportToWarehouse.controller')

module.exports = {
    factoryController,
    orderController,
    productRecallController,
    productController,
    productlineController,
    serviceCenterController,
    storeController,
    warrantyController,
    AuthController,
    WarehouseController,
    requestController,
    TransactionController,
    ExportToWarehouseController
}