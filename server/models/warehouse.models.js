const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const WarehouseModel = dbConfig.define(
    'warehouse', 
    {
        warehouseID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        factoryID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productLine: {
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

WarehouseModel.associate = (models) => {
    WarehouseModel.belongsTo(models.FactoryModel, {
        foreignKey: 'factoryID'
    })
}

module.exports = WarehouseModel