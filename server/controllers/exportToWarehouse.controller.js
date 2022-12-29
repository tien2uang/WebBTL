const { ExportToWarehouse, TransactionModel } = require("../models/index");

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
      productLine: req.body.productLine,
      numberOfProduct: req.body.numberOfProduct,
    };
    const transaction = {
      source: req.body.factoryID,
      destination: req.body.warehouseID,
      sent: "Sent",
      received: "Not received",
      action: "Export to warehouse",
    };
  
    ExportToWarehouse.create(warehouse)
      .then((data) => {
        res.send(data);
        TransactionModel.create(transaction)
      })
      .catch((err) => {
        res.status(500).send({
          message: "Some error occurred while exporting.",
        });
      });
  };