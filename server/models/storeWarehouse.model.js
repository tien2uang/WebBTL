const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const storeWarehouseModel = dbConfig.define(
    'store_warehouse', 
    {
        storeWarehouseID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = storeWarehouseModel