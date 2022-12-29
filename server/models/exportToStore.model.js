const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const ExportToStore = dbConfig.define(
    'export_to_store', 
    {
        storeID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        warehouseID: {
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

module.exports = ExportToStore