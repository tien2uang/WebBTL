const dbConfig = require("../config/db.config");
const { DataTypes } = require("sequelize");

const OrderdetailModel = dbConfig.define(
  "orderdetails",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    orderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantityOrdered: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priceEach: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = OrderdetailModel;
