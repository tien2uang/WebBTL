const { WarehouseModel } = require("../models/index");

exports.findAll = async (req, res) => {
  try {
    const warehouse = await WarehouseModel.findAll();
    res.json(warehouse);
  } catch (err) {
    console.log(err);
  }
};

exports.findOne = async (req, res) => {
  try {
    const warehouse = await WarehouseModel.findByPk(req.params.warehouseID);
    res.json(warehouse);
  } catch (err) {
    console.log(err);
  }
};

