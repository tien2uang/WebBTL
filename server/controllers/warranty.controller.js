const { WarrantyModel } = require('../models/index')
const sequelize = require('../config/db.config')

exports.findAll = async (req, res) => {
    try {
        const warranties = await WarrantyModel.findAll()
        res.json(warranties)
    } catch(err) {
        console.log(err);
    }
}

exports.defecetiveByProductLine = async(req, res) => {
    try {
        const [ orders ] = await sequelize.query(
            "select warranty.warrantyStatus, \
            customers.customerID, customers.customerName, customers.customerPhone, customers.customerAddress, \
            products.* \
            from warranty \
            join customers \
            on warranty.customerID = customers.customerID \
            join products \
            on customers.productID = products.productID \
            where productLine = :productline", 
            { replacements: { productline: req.params.productline } })
        res.json(orders)
    } catch (err) {
        console.log(err);
    }
}


exports.defecetiveByStoreID = async(req, res) => {
    try {
        const [ orders ] = await sequelize.query(
            "select warranty.warrantyStatus, stores.storeID, stores.address \
            from warranty \
            join stores \
            on warranty.storeID = stores.storeID \
            where stores.storeID = :storeID", 
            { replacements: { storeID: req.params.storeID } })
        res.json(orders)
    } catch (err) {
        console.log(err);
    }
}


exports.defecetiveByServicecenterID = async(req, res) => {
    try {
        const [ orders ] = await sequelize.query(
            "select warranty.warrantyStatus, \
            servicecenters.servicecenterID, servicecenters.address \
            from warranty \
            join servicecenters \
            on warranty.servicecenterID = servicecenters.servicecenterID \
            where servicecenters.servicecenterID = :servicecenterID",
            { replacements: { servicecenterID: req.params.servicecenterID } })
        res.json(orders)
    } catch (err) {
        console.log(err);
    }
}


exports.receiveFromServiceCenter = async(req, res) => {
    try {
        const [ orders ] = await sequelize.query(
            "select warranty.warrantyStatus, \
            servicecenters.servicecenterID, servicecenters.address, \
            customers.customerID, customers.customerName, customers.customerPhone, customers.customerAddress, \
            products.* \
            from warranty \
            join servicecenters \
            on warranty.servicecenterID = servicecenters.servicecenterID \
            join customers \
            on warranty.customerID = customers.customerID \
            join products \
            on customers.productID = products.productID \
            where servicecenters.servicecenterID = :servicecenterID",
            { replacements: { servicecenterID: req.params.servicecenterID } })
        res.json(orders)
    } catch (err) {
        console.log(err);
    }
}

