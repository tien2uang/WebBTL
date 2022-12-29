const dbConfig = require("../config/db.config");
const { DataTypes } = require("sequelize");

const StoreModel = dbConfig.define(
  "stores",
  {
    storeID: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    factoryID: {
      type: DataTypes.STRING,
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

StoreModel.associate = (models) => {
  StoreModel.belongsTo(models.FactoryModel, {
    foreignKey: "factoryID",
  });
};

module.exports = StoreModel;
