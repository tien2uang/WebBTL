const customerController = require('./customer.controller')
const factoryController = require('./factory.controller')
const orderController = require('./order.controller')
const orderdetailsController = require('./orderdetails.controller')
const productRecallController = require('./product_recall.controller')
const productController = require('./product.controller')
const productlineController = require('./productline.controller')
const serviceCenterController = require('./servicecenter.controller')
const storeController = require('./store.controller')
const warrantyController = require('./warranty.controller')
const CredentialController = require('./credential.controller')
const AuthController = require('./auth.controller')

module.exports = {
    customerController,
    factoryController,
    orderController,
    orderdetailsController,
    productRecallController,
    productController,
    productlineController,
    serviceCenterController,
    storeController,
    warrantyController,
    CredentialController,
    AuthController
}