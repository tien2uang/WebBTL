const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const ProductRecallModel = dbConfig.define(
    'product_recall', 
    {
        productLine: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        servicecenterID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = ProductRecallModel