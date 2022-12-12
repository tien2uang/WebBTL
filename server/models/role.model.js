const dbConfig = require('../config/db.config')
const { DataTypes } = require('sequelize')

const RoleModel = dbConfig.define(
    'roles',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
)

module.exports = RoleModel