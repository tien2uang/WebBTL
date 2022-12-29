const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const ExportToStoreWarehouse = dbConfig.define(
    'export_to_store_warehouse', 
    {
        storeID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        storeWarehouseID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numberOfProduct: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = ExportToStoreWarehouse