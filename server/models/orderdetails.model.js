const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const OrderdetailModel = dbConfig.define(
    'orderdetails',
    {
        orderID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        productID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        quantityOrdered: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        priceEach: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = OrderdetailModel