const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const sendToServiceCenter = dbConfig.define(
    'send_to_servicecenter', 
    {
        storeID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        servicecenterID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = sendToServiceCenter