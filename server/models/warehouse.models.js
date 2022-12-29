const dbConfig = require("../config/db.config");
const { DataTypes } = require("sequelize");

const WarehouseModel = dbConfig.define(
  "warehouse",
  {
    warehouseID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = WarehouseModel;
