const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const FactoryModel = dbConfig.define(
    'factories', 
    {
        factoryID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        numberOfProduct: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

FactoryModel.associate = (models) => {
    FactoryModel.hasMany(models.StoreModel, {
        foreignKey: 'factoryID'
    })
}

module.exports = FactoryModel