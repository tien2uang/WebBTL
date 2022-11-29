const customerRouter = require('./customer.router')
const factoryRouter = require('./factory.router')
const orderRouter = require('./order.router')
const orderdetailsRouter = require('./orderdetails.router')
const productRouter = require('./product.router')
const productlineRouter = require('./productline.router')
const productRecallRouter = require('./productRecall.router')
const servicecenterRouter = require('./servicecenter.router')
const storeRouter = require('./store.router')
const warrantyRouter = require('./warranty.router')

module.exports = {
    customerRouter,
    factoryRouter,
    orderRouter,
    orderdetailsRouter,
    productRecallRouter,
    productRouter,
    productlineRouter,
    servicecenterRouter,
    storeRouter,
    warrantyRouter
}