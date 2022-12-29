const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const ExportToWarehouse = dbConfig.define(
    'export_to_warehouse', 
    {
        warehouseID: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        warehouseID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        factoryID: {
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

// ExportToWarehouse.associate = (models) => {
//     ExportToWarehouse.belongsTo(models.FactoryModel, {
//         foreignKey: 'factoryID'
//     })
// }

module.exports = ExportToWarehouse