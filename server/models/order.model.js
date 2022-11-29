const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const OrderModel = dbConfig.define(
    'orders', 
    {
        orderID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING
        },
        customerID: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = OrderModel