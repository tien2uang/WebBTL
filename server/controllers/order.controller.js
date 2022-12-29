const { OrderModel } = require("../models/index");
const sequelize = require("../config/db.config");

exports.findAll = async (req, res) => {
  try {
    const orders = await OrderModel.findAll();
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

exports.findOne = async (req, res) => {
  try {
    const orders = await OrderModel.findByPk(req.params.orderID);
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

exports.salesByMonth = async (req, res) => {
  try {
    const [orders] = await sequelize.query(
      "select * from orders select orders.*,\
      productID, quantityOrdered,priceEach\
       from orders\
       join orderdetails \
       on orders.orderID = orderdetails.orderID\
        where month(orderDate) = : month",
      { replacements: { month: req.params.month } }
    );
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

exports.salesByYear = async (req, res) => {
  try {
    const [orders] = await sequelize.query(
      "select * from orders select orders.*,\
      productID, quantityOrdered,priceEach\
       from orders\
       join orderdetails \
       on orders.orderID = orderdetails.orderID\ where year(orderDate) = :year",
      { replacements: { year: req.params.year } }
    );
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

exports.salesByQuarter = async (req, res) => {
  try {
    const quarter = req.params.quarter;
    if (quarter == 1) {
      const [orders] = await sequelize.query(
        "select * from orders select orders.*,\
        productID, quantityOrdered,priceEach\
         from orders\
         join orderdetails \
         on orders.orderID = orderdetails.orderID\where month(orderDate) in(:month)",
        { replacements: { month: ["1", "2", "3"] } }
      );
      res.json(orders);
    } else if (quarter == 2) {
      const [orders] = await sequelize.query(
        "select * from orders select orders.*,\
        productID, quantityOrdered,priceEach\
         from orders\
         join orderdetails \
         on orders.orderID = orderdetails.orderID\where month(orderDate) in(:month)",
        { replacements: { month: ["4", "5", "6"] } }
      );
      res.json(orders);
    } else if (quarter == 3) {
      const [orders] = await sequelize.query(
        "select * from orders select orders.*,\
        productID, quantityOrdered,priceEach\
         from orders\
         join orderdetails \
         on orders.orderID = orderdetails.orderID\ where month(orderDate) in(:month)",
        { replacements: { month: ["7", "8", "9"] } }
      );
      res.json(orders);
    } else if (quarter == 4) {
      const [orders] = await sequelize.query(
        "select * from orders select orders.*,\
        productID, quantityOrdered,priceEach\
         from orders\
         join orderdetails \
         on orders.orderID = orderdetails.orderID\ where month(orderDate) in(:month)",
        { replacements: { month: ["10", "11", "12"] } }
      );
      res.json(orders);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getSales = async (req, res) => {
  try {
    const [orders] = await sequelize.query(
      "select orders.*, customerName, customerPhone, customerAddress, \
            products.* from orders \
            join customers \
            on orders.customerID = customers.customerID \
            join products \
            on customers.productID = products.productID"
    );
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

exports.getSalesByStoreAll = async (req, res) => {
  try {
    const [orders] = await sequelize.query(
      "select orders.*, \
            customerName, customerPhone, customerAddress, \
            products.*, \
            stores.* \
            from orders \
            join customers \
            on orders.customerID = customers.customerID \
            join products \
            on customers.productID = products.productID \
            join productlines \
            on products.productLine = productlines.productLine \
            join stores \
            on productlines.storeID = stores.storeID"
    );
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

exports.getSalesByStore = async (req, res) => {
  try {
    const [orders] = await sequelize.query(
      "select orders.*, \
            customerName, customerPhone, customerAddress, \
            products.*, \
            stores.* \
            from orders \
            join customers \
            on orders.customerID = customers.customerID \
            join products \
            on customers.productID = products.productID \
            join productlines \
            on products.productLine = productlines.productLine \
            join stores \
            on productlines.storeID = stores.storeID\
            where stores.storeID = :storeID",
      { replacements: { storeID: req.params.storeID } }
    );
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

exports.getSalesByFactoriesAll = async (req, res) => {
  try {
    const [orders] = await sequelize.query(
      "select orders.*, \
            customerName, customerPhone, customerAddress, \
            products.*, \
            factories.* \
            from orders \
            join customers \
            on orders.customerID = customers.customerID\
            join products \
            on customers.productID = products.productID\
            join productlines\
            on products.productLine = productlines.productLine\
            join stores\
            on productlines.storeID = stores.storeID\
            join factories\
            on stores.factoryID = factories.factoryID"
    );
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

exports.getSalesByFactories = async (req, res) => {
  try {
    const [orders] = await sequelize.query(
      "select orders.*, \
            customerName, customerPhone, customerAddress, \
            products.*, \
            factories.* \
            from orders \
            join customers \
            on orders.customerID = customers.customerID\
            join products \
            on customers.productID = products.productID\
            join productlines\
            on products.productLine = productlines.productLine\
            join stores\
            on productlines.storeID = stores.storeID\
            join factories\
            on stores.factoryID = factories.factoryID\
            where factories.factoryID = :factoryID",
      { replacements: { factoryID: req.params.factoryID } }
    );
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};




/////////////////////////////////////////////////////
exports.create = async (req, res) => {
  if (!req.body.orderID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const order = {
    // orderID: req.body.orderID,
    orderDate: req.body.orderDate,
    status: req.body.status,
    comment: req.body.comment,
    customerID: req.body.customerID,

  };

  OrderModel.create(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Some error occurred while creating the store."
      });
    });
}