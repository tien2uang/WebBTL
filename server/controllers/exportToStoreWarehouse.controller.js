const { ExportToStoreWarehouse, TransactionModel } = require("../models/index");

exports.create = async (req, res) => {
  if (!req.body.storeWarehouseID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const storeWarehouse = {
    storeID: req.body.storeID,
    storeWarehouseID: req.body.storeWarehouseID,
    productID: req.body.productID,
    numberOfProduct: req.body.numberOfProduct,
  };
  const transaction = {
    source: req.body.storeID,
    destination: req.body.storeWarehouseID,
    sent: "Sent",
    received: "Not received",
    action: "Export to store's warehouse",
  };

  ExportToStoreWarehouse.create(storeWarehouse)
    .then((data) => {
      res.send(data);
      TransactionModel.create(transaction);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while exporting.",
      });
    });
};
