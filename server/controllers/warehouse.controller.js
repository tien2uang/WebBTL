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

/////////////////////////////////////////////////////
exports.create = async (req, res) => {
  if (!req.body.warehouseID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const warehouse = {
    warehouseID: req.body.warehouseID,
    factoryID: req.body.factoryID,
    address: req.body.address,
    productLine: req.body.productLine,
    numberOfProduct: req.body.numberOfProduct,
  };

  WarehouseModel.create(warehouse)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};
