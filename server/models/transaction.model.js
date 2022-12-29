const dbConfig = require("../config/db.config");
const { DataTypes } = require("sequelize");

const TransactionModel = dbConfig.define(
  "transactions",
  {
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    received: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = TransactionModel;
