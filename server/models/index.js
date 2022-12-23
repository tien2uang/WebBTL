const CustomerModel = require('./customer.model.js')
const FactoryModel = require('./factory.model.js')
const OrderModel = require('./order.model.js')
const OrderdetailModel = require('./orderdetails.model.js')
const ProductRecallModel = require('./product_recall.model.js')
const ProductModel = require('./product.model.js')
const ProductlineModel = require('./productline.model.js')
const ServiceCenterModel = require('./servicecenter.model.js')
const StoreModel = require('./store.model.js')
const WarrantyModel = require('./warranty.model.js')
const credentialModel = require('./credential.model')
const RoleModel = require('./role.model')
const ROLES = ["admin", "factory", "store", "servicecenter"]
// const ROLES = ["factory", "store", "servicecenter"]

FactoryModel.hasMany(StoreModel, {
    foreignKey: {
        name: "factoryID",
        allowNull: false
    }
})


StoreModel.hasMany(ProductlineModel, {
    foreignKey: {
        name: "storeID",
        allowNull: false
    }
})


ProductlineModel.hasMany(ProductModel, {
    foreignKey: {
        name: "productLine",
        allowNull: false
    }
})


ProductModel.hasMany(CustomerModel, {
    foreignKey: {
        name: "productID",
        allowNull: false
    }
})


CustomerModel.hasMany(OrderModel, {
    foreignKey: {
        name: "customerID",
        allowNull: false
    }
})


ProductModel.hasMany(OrderdetailModel, {
    foreignKey: {
        name: "productID",
        allowNull: false
    }
})


OrderModel.hasMany(OrderdetailModel, {
    foreignKey: {
        name: "orderID",
        allowNull: false
    }
})


ProductlineModel.hasMany(ProductRecallModel, {
    foreignKey: {
        name: "productLine",
        allowNull: false
    }
})


ServiceCenterModel.hasMany(ProductRecallModel, {
    foreignKey: {
        name: "servicecenterID",
        allowNull: false
    }
})


CustomerModel.hasMany(ProductRecallModel, {
    foreignKey: {
        name: "customerID",
        allowNull: false
    }
})


StoreModel.hasMany(WarrantyModel, {
    foreignKey: {
        name: "storeID",
        allowNull: false
    }
})


ServiceCenterModel.hasMany(WarrantyModel, {
    foreignKey: {
        name: "servicecenterID",
        allowNull: false
    }
})


CustomerModel.hasMany(WarrantyModel, {
    foreignKey: {
        name: "customerID",
        allowNull: false
    }
})


RoleModel.hasMany(credentialModel, {
    foreignKey: "roleId"
})

credentialModel.hasMany(RoleModel, {
  foreignKey: "userId"
})
  


module.exports = {
    CustomerModel,
    FactoryModel,
    OrderModel,
    OrderdetailModel,
    ProductRecallModel,
    ProductModel,
    ProductlineModel,
    ServiceCenterModel,
    StoreModel,
    WarrantyModel,
    credentialModel,
    RoleModel,
    ROLES
}