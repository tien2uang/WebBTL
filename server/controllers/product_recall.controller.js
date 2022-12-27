const { ProductRecallModel } = require('../models/index')
const sequelize = require('../config/db.config')

exports.findAll = async (req, res) => {
    try {
        const productRecalls = await ProductRecallModel.findAll()
        res.json(productRecalls)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const productRecalls = await ProductRecallModel.findByPk(req.params.productLine)
        res.json(productRecalls)
    } catch (err) {
        console.log(err);
    }
}

exports.allRecall = async(req, res) => {
    try {
        const [ recall ] = await sequelize.query(
            "select product_recall.*,\
            customerName, customerPhone, customerAddress,\
            products.*\
            from product_recall\
            join customers\
            on product_recall.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID"
        )
        res.json(recall)
    } catch (err) {
        console.log(err);
    }
}

exports.recallByProductLine = async(req, res) => {
    try {
        const [ recall ] = await sequelize.query(
            "select product_recall.*,\
            customerName, customerPhone, customerAddress,\
            products.*\
            from product_recall\
            join customers\
            on product_recall.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID\
            where productLine = :productline", 
            { replacements: { productline: req.params.productline } })
        res.json(recall)
    } catch (err) {
        console.log(err);
    }
}

exports.recallByProductLineAll = async(req, res) => {
    try {
        const [ recall ] = await sequelize.query(
            "select product_recall.*,\
            customerName, customerPhone, customerAddress,\
            products.*\
            from product_recall\
            join customers\
            on product_recall.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID", 
        )
        res.json(recall)
    } catch (err) {
        console.log(err);
    }
}

exports.recallByServiceCenter = async(req, res) => {
    try {
        const [ recall ] = await sequelize.query(
            "select product_recall.productLine, status\
            customerName, customerPhone, customerAddress,\
            products.*,\
            servicecenters.*\
            from product_recall\
            join customers\
            on product_recall.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID\
            join servicecenters\
            on product_recall.servicecenterID = servicecenters.servicecenterID\
            where servicecenters.servicecenterID = :servicecenterID",
            { replacements: { servicecenterID: req.params.servicecenterID } })
        res.json(recall)
    } catch (err) {
        console.log(err);
    }
}

exports.recallByServiceCenterAll = async(req, res) => {
    try {
        const [ recall ] = await sequelize.query(
            "select product_recall.productLine, status\
            customerName, customerPhone, customerAddress,\
            products.*,\
            servicecenters.*\
            from product_recall\
            join customers\
            on product_recall.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID\
            join servicecenters\
            on product_recall.servicecenterID = servicecenters.servicecenterID",
        )
        res.json(recall)
    } catch (err) {
        console.log(err);
    }
}

exports.recallByStore = async(req, res) => {
    try {
        const [ recall ] = await sequelize.query(
            "select product_recall.productLine, status\
            customerName, customerPhone, customerAddress,\
            products.*,\
            stores.*\
            from product_recall\
            join customers\
            on product_recall.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID\
            join productlines\
            on products.productLine = productlines.productLine\
            join stores\
            on productlines.storeID = stores.storeID\
            where stores.storeID = :storeID",
            { replacements: { storeID: req.params.storeID } })
        res.json(recall)
    } catch (err) {
        console.log(err);
    }
}

exports.recallByStoreAll = async(req, res) => {
    try {
        const [ recall ] = await sequelize.query(
            "select product_recall.productLine, status\
            customerName, customerPhone, customerAddress,\
            products.*,\
            stores.*\
            from product_recall\
            join customers\
            on product_recall.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID\
            join productlines\
            on products.productLine = productlines.productLine\
            join stores\
            on productlines.storeID = stores.storeID",
        )
        res.json(recall)
    } catch (err) {
        console.log(err);
    }
}