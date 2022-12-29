const { ExportToStore, TransactionModel } = require("../models/index");

exports.create = async (req, res) => {
    if (!req.body.storeID) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    const store = {
      storeID: req.body.storeID,
      warehouseID: req.body.warehouseID,
      productID: req.body.productID,
      numberOfProduct: req.body.numberOfProduct,
    };
    const transaction = {
      source: req.body.warehouseID,
      destination: req.body.storeID,
      sent: "Sent",
      received: "Not received",
      action: "Export to store",
    };
  
    ExportToStore.create(store)
      .then((data) => {
        res.send(data);
        TransactionModel.create(transaction)
      })
      .catch((err) => {
        res.status(500).send({
          message: err,
        });
      });
  };