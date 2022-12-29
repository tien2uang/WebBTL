const { ProductlineModel, TransactionModel } = require("../models/index");

exports.findAll = async (req, res) => {
  try {
    const productlines = await ProductlineModel.findAll();
    res.json(productlines);
  } catch (err) {
    console.log(err);
  }
};

exports.findOne = async (req, res) => {
  try {
    const productlines = await ProductlineModel.findByPk(
      req.params.productLine
    );
    res.json(productlines);
  } catch (err) {
    console.log(err);
  }
};

exports.create = async (req, res) => {
  if (!req.body.storeID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const productline = {
    productLine: req.body.productLine,
    storeID: req.body.storeID,
    description: req.body.description,
    importDate: req.body.importDate,
  };
  const transaction = {
    source: req.body.storeID,
    destination: req.body.storeID,
    sent: "Sent",
    received: "Not received",
    action: "Export to warehouse",
  };

  ProductlineModel.create(productline)
    .then((data) => {
      res.send(data);
      TransactionModel.create(transaction);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message,
      });
    });
};

exports.update = (req, res) => {
  const productLine = req.body.productLine;

  ProductlineModel.update(
    {
      storeID: req.body.storeID,
      description: req.body.description,
      importDate: req.body.importDate,
    },
    { where: { productLine: productLine } }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "ProductlineModel was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update ProductlineModel with id=${productLine}. Maybe ProductlineModel was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

exports.delete = (req, res) => {
  const productLine = req.body.productLine;

  ProductlineModel.destroy({
    where: { productLine: productLine },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "productline was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete productline with id=${productLine}. Maybe productline was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};
