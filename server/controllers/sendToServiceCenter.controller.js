const { sendToServiceCenter, TransactionModel } = require("../models/index");

exports.create = async (req, res) => {
  if (!req.body.servicecenterID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const warehouse = {
    servicecenterID: req.body.servicecenterID,
    storeID: req.body.storeID,
    customerID: req.body.customerID,
    time: req.body.time,
  };
  const transaction = {
    source: req.body.storeID,
    destination: req.body.servicecenterID,
    sent: "Sent",
    received: "Not received",
    action: "Send to service center",
  };

  sendToServiceCenter.create(warehouse)
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
