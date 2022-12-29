const { TransactionModel } = require("../models/index");

exports.findAll = async (req, res) => {
  try {
    const transactions = await TransactionModel.findAll();
    res.json(transactions);
  } catch (err) {
    console.log(err);
  }
};

exports.create = async (req, res) => {
  if (!req.body.transactionID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const transaction = {
    source: req.body.source,
    destination: req.body.destination,
    sent: req.body.sent,
    received: req.body.received,
    action: req.body.action,
  };

  TransactionModel.create(transaction)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err
      });
    });
};


exports.exportToStore = (req, res) => {
  TransactionModel.update(
      {
          received: "Received"
      },
      { where: { 
        destination: req.body.storeID, 
        source: req.body.warehouseID 
      } }
      )
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "TransactionModel was updated successfully."
              });
          } else {
              res.send({
                  message: `Cannot update TransactionModel with . Maybe TransactionModel was not found or req.body is empty!`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: err 
          });
      });
};

exports.exportToWarehouse = (req, res) => {
  TransactionModel.update(
      {
          received: "Received"
      },
      { where: { 
        destination: req.body.warehouseID, 
        source: req.body.factoryID 
      } }
      )
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "TransactionModel was updated successfully."
              });
          } else {
              res.send({
                  message: `Cannot update TransactionModel with . Maybe TransactionModel was not found or req.body is empty!`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: err 
          });
      });
};

exports.exportToServiceCenter = (req, res) => {
  TransactionModel.update(
      {
          received: "Received"
      },
      { where: { 
        destination: req.body.servicecenterID, 
        source: req.body.storeID
      } }
      )
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "TransactionModel was updated successfully."
              });
          } else {
              res.send({
                  message: `Cannot update TransactionModel with . Maybe TransactionModel was not found or req.body is empty!`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: err 
          });
      });
};


exports.exportToStoreWarehouse = (req, res) => {
  TransactionModel.update(
      {
          received: "Received"
      },
      { where: { 
        destination: req.body.storeWarehouseID, 
        source: req.body.storeID
      } }
      )
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "TransactionModel was updated successfully."
              });
          } else {
              res.send({
                  message: `Cannot update TransactionModel with . Maybe TransactionModel was not found or req.body is empty!`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: err 
          });
      });
};


exports.sendToServiceCenter = (req, res) => {
  TransactionModel.update(
      {
          received: "Received"
      },
      { where: { 
        destination: req.body.servicecenterID, 
        source: req.body.storeID
      } }
      )
      .then(num => {
          if (num == 1) {
              res.send({
                  message: "TransactionModel was updated successfully."
              });
          } else {
              res.send({
                  message: `Cannot update TransactionModel with . Maybe TransactionModel was not found or req.body is empty!`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: err 
          });
      });
};