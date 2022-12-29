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
        const [ warranty ] = await sequelize.query(
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
        res.json(warranty)
    } catch (err) {
        console.log(err);
    }
}


exports.defecetiveByStoreID = async(req, res) => {
    try {
        const [ warranty ] = await sequelize.query(
            "select id, warrantyStatus, \
            stores.*,\
            customers.customerID, customerName, customerPhone, customerAddress,\
            products.*\
            from warranty \
            join stores \
            on warranty.storeID = stores.storeID \
            join customers\
            on warranty.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID\
            where stores.storeID = :storeID", 
            { replacements: { storeID: req.params.storeID } })
        res.json(warranty)
    } catch (err) {
        console.log(err);
    }
}


exports.defecetiveByServicecenterID = async(req, res) => {
    try {
        const [ warranty ] = await sequelize.query(
            "select id, warrantyStatus, \
            servicecenters.servicecenterID, servicecenters.address,\
            customers.customerID, customerName, customerPhone, customerAddress,\
            products.*\
            from warranty \
            join servicecenters \
            on warranty.servicecenterID = servicecenters.servicecenterID\
            join customers\
            on warranty.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID \
            where servicecenters.servicecenterID = :servicecenterID",
            { replacements: { servicecenterID: req.params.servicecenterID } })
        res.json(warranty)
    } catch (err) {
        console.log(err);
    }
}

exports.defecetiveByProductLineAll = async(req, res) => {
    try {
        const [ warranty ] = await sequelize.query(
            "select warranty.warrantyStatus, \
            customers.customerID, customers.customerName, customers.customerPhone, customers.customerAddress, \
            products.* \
            from warranty \
            join customers \
            on warranty.customerID = customers.customerID \
            join products \
            on customers.productID = products.productID"
        )
        res.json(warranty)
    } catch (err) {
        console.log(err);
    }
}


exports.defecetiveByStoreAll = async(req, res) => {
    try {
        const [ warranty ] = await sequelize.query(
            "select id, warrantyStatus, \
            stores.*,\
            customers.customerID, customerName, customerPhone, customerAddress,\
            products.*\
            from warranty \
            join stores \
            on warranty.storeID = stores.storeID \
            join customers\
            on warranty.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID"
        )
        res.json(warranty)
    } catch (err) {
        console.log(err);
    }
}


exports.defecetiveByServicecenterAll = async(req, res) => {
    try {
        const [ warranty ] = await sequelize.query(
            "select id, warrantyStatus, \
            servicecenters.servicecenterID, servicecenters.address,\
            customers.customerID, customerName, customerPhone, customerAddress,\
            products.*\
            from warranty \
            join servicecenters \
            on warranty.servicecenterID = servicecenters.servicecenterID\
            join customers\
            on warranty.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID"
        )
        res.json(warranty)
    } catch (err) {
        console.log(err);
    }
}