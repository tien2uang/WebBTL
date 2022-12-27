const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const ProductModel = dbConfig.define(
    'products', 
    {
        productID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        productLine: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        buyPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        quantityInStock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        warrantyExpire: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        importDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = ProductModel