const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const WarrantyModel = dbConfig.define(
    'warranty', 
    {
        storeID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        servicecenterID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        customerID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        warrantyStatus: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = WarrantyModel