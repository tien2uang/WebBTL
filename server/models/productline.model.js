const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const ProductlineModel = dbConfig.define(
    'productlines', 
    {
        productLine: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        storeID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        importDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = ProductlineModel