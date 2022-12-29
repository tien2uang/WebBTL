const dbConfig = require("../config/db.config");
const { DataTypes } = require("sequelize");

const WarrantyModel = dbConfig.define(
  "warranty",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    storeID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servicecenterID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    warrantyStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = WarrantyModel;
