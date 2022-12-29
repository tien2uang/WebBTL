const { ProductModel } = require("../models/index");
const sequelize = require("../config/db.config");

exports.findAll = async (req, res) => {
  try {
    const products = await ProductModel.findAll();
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.findOne = async (req, res) => {
  try {
    const products = await ProductModel.findByPk(req.params.productID);
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.create = async (req, res) => {
  if (!req.body.productID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const product = {
    productID: req.body.productID,
    productLine: req.body.productLine,
    productName: req.body.productName,
    description: req.body.description,
    buyPrice: req.body.buyPrice,
    quantityInStock: req.body.quantityInStock,
    warrantyExpire: req.body.warrantyExpire,
    importDate: req.body.importDate,
    numberOfProducts: req.body.numberOfProducts,
  };

  ProductModel.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while creating the product.",
      });
    });
};

exports.update = (req, res) => {
  const productID = req.body.productID;

  ProductModel.update(
    {
      productName: req.body.productName,
      description: req.body.description,
      buyPrice: req.body.buyPrice,
      quantityInStock: req.body.quantityInStock,
      warrantyExpire: req.body.warrantyExpire,
      importDate: req.body.importDate,
      numberOfProducts: req.body.numberOfProducts,
    },
    { where: { productID: productID } }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "ProductModel was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update ProductModel with id=${productID}. Maybe ProductModel was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating ProductModel with id=" + productID,
      });
    });
};

exports.delete = (req, res) => {
  const productID = req.body.productID;

  ProductModel.destroy({
    where: { productID: productID },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete product with id=${productID}. Maybe product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete product with id=" + productID,
      });
    });
};

exports.viewByMonth = async (req, res) => {
  try {
    const [products] = await sequelize.query(
      "select * from products where month(importDate) = :month",
      { replacements: { month: req.params.month } }
    );
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.viewByYear = async (req, res) => {
  try {
    const [products] = await sequelize.query(
      "select * from products where year(importDate) = :year",
      { replacements: { year: req.params.year } }
    );
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.viewByQuarter = async (req, res) => {
  try {
    const quarter = req.params.quarter;
    if (quarter == 1) {
      const [orders] = await sequelize.query(
        "select * from products where month(importDate) in(:month)",
        { replacements: { month: ["1", "2", "3"] } }
      );
      res.json(orders);
    } else if (quarter == 2) {
      const [orders] = await sequelize.query(
        "select * from products where month(importDate) in(:month)",
        { replacements: { month: ["4", "5", "6"] } }
      );
      res.json(orders);
    } else if (quarter == 3) {
      const [orders] = await sequelize.query(
        "select * from products where month(importDate) in(:month)",
        { replacements: { month: ["7", "8", "9"] } }
      );
      res.json(orders);
    } else if (quarter == 4) {
      const [orders] = await sequelize.query(
        "select * from products where month(importDate) in(:month)",
        { replacements: { month: ["10", "11", "12"] } }
      );
      res.json(orders);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getSold = async (req, res) => {
  try {
    const [products] = await sequelize.query(
      "select customerID, customerName, customerPhone, customerAddress,\
            products.* \
            from customers\
            join products\
            on customers.productID = products.productID"
    );
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

exports.Unsold = async (req, res) => {
  try {
    const [products] = await sequelize.query(
      "select customerID, customerName, customerAddress, customerPhone,\
            products.* \
            from customers\
            join products\
            on customers.productID = products.productID\
            where customers.productID not in \
            (select productID from products)"
    );
    res.json(products);
  } catch (err) {
    console.log(err);
  }
};
