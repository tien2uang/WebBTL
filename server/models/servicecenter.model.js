const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const ServicecenterModel = dbConfig.define(
    'servicecenters', 
    {
        servicecenterID: {
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

module.exports = ServicecenterModel