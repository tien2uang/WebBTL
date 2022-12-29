const sequelize = require("../config/db.config");
const { WarrantyModel, TransactionModel } = require("../models/index");

exports.findAll = async (req, res) => {
  try {
    const warranties = await WarrantyModel.findAll();
    res.json(warranties);
  } catch (err) {
    console.log(err);
  }
};

exports.defecetiveByProductLine = async (req, res) => {
  try {
    const [warranty] = await sequelize.query(
      "select warranty.warrantyStatus, \
            customers.customerID, customers.customerName, customers.customerPhone, customers.customerAddress, \
            products.* \
            from warranty \
            join customers \
            on warranty.customerID = customers.customerID \
            join products \
            on customers.productID = products.productID \
            where productLine = :productline",
      { replacements: { productline: req.params.productline } }
    );
    res.json(warranty);
  } catch (err) {
    console.log(err);
  }
};

exports.defecetiveByStoreID = async (req, res) => {
  try {
    const [warranty] = await sequelize.query(
      "select id, warrantyStatus, \
            stores.*,\
            customers.customerID, customerName, customerPhone, customerAddress,\
            products.*\
            from warranty \
            join stores \
            on warranty.storeID = stores.storeID \
            join customers\
            on warranty.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID\
            where stores.storeID = :storeID",
      { replacements: { storeID: req.params.storeID } }
    );
    res.json(warranty);
  } catch (err) {
    console.log(err);
  }
};

exports.defecetiveByServicecenterID = async (req, res) => {
  try {
    const [warranty] = await sequelize.query(
      "select id, warrantyStatus, \
            servicecenters.servicecenterID, servicecenters.address,\
            customers.customerID, customerName, customerPhone, customerAddress,\
            products.*\
            from warranty \
            join servicecenters \
            on warranty.servicecenterID = servicecenters.servicecenterID\
            join customers\
            on warranty.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID \
            where servicecenters.servicecenterID = :servicecenterID",
      { replacements: { servicecenterID: req.params.servicecenterID } }
    );
    res.json(warranty);
  } catch (err) {
    console.log(err);
  }
};

exports.defecetiveByProductLineAll = async (req, res) => {
  try {
    const [warranty] = await sequelize.query(
      "select warranty.warrantyStatus, \
            customers.customerID, customers.customerName, customers.customerPhone, customers.customerAddress, \
            products.* \
            from warranty \
            join customers \
            on warranty.customerID = customers.customerID \
            join products \
            on customers.productID = products.productID"
    );
    res.json(warranty);
  } catch (err) {
    console.log(err);
  }
};

exports.defecetiveByStoreAll = async (req, res) => {
  try {
    const [warranty] = await sequelize.query(
      "select id, warrantyStatus, \
            stores.*,\
            customers.customerID, customerName, customerPhone, customerAddress,\
            products.*\
            from warranty \
            join stores \
            on warranty.storeID = stores.storeID \
            join customers\
            on warranty.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID"
    );
    res.json(warranty);
  } catch (err) {
    console.log(err);
  }
};

exports.defecetiveByServicecenterAll = async (req, res) => {
  try {
    const [warranty] = await sequelize.query(
      "select id, warrantyStatus, \
            servicecenters.servicecenterID, servicecenters.address,\
            customers.customerID, customerName, customerPhone, customerAddress,\
            products.*\
            from warranty \
            join servicecenters \
            on warranty.servicecenterID = servicecenters.servicecenterID\
            join customers\
            on warranty.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID"
    );
    res.json(warranty);
  } catch (err) {
    console.log(err);
  }
};

/////////////////////////////////////////////////////
exports.create = async (req, res) => {
  if (!req.body.storeID) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  const warranties = {
    storeID: req.body.storeID,
    servicecenterID: req.body.servicecenterID,
    customerID: req.body.customerID,
    warrantyStatus: req.body.warrantyStatus,
    date: req.body.date,
  };
  const transaction = {
    source: req.body.storeID,
    destination: req.body.servicecenterID,
    sent: "Sent",
    received: "Not received",
    action: "Send to service center for warranty",
  };

  WarrantyModel.create(warranties)
    .then((data) => {
      res.send(data);
      TransactionModel.create(transaction);
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

exports.delete = (req, res) => {
  WarrantyModel.destroy({
    where: { warrantyStatus: "Done" },
  })
    .then(() => {
      res.send({
        message: "Success!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

exports.return = async (req, res) => {
  // try {
  //   const [warranty] = await sequelize.query(
  //     "select id, warrantyStatus, \
  //     c.customerID, customerName, customerPhone, customerAddress,\
  //     p.*\
  //     from warranty w \
  //     join customers c \
  //     on w.customerID = c.customerID\
  //     join products p \
  //     on c.productID = p.productID\
  //     where warrantyStatus = 'Return to factory'\
  //     "
  //   );
  //   res.json(warranty);
  // } catch (err) {
  //   console.log(err);
  // }
  WarrantyModel.destroy({
    where: { warrantyStatus: "Return to factory" },
  })
    .then(() => {
      res.send({
        message: "Success!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};

exports.warrantyByMonth = async (req, res) => {
  try {
    const [warranty] = await sequelize.query(
      "select * from warranty where month(date) = :month",
      { replacements: { month: req.params.month } }
    );
    res.json(warranty);
  } catch (err) {
    console.log(err);
  }
};

exports.warrantyByYear = async (req, res) => {
  try {
    const [warranty] = await sequelize.query(
      "select * from warranty where year(date) = :year",
      { replacements: { year: req.params.year } }
    );
    res.json(warranty);
  } catch (err) {
    console.log(err);
  }
};

exports.warrantyByQuarter = async (req, res) => {
  try {
    const quarter = req.params.quarter;
    if (quarter == 1) {
      const [warranty] = await sequelize.query(
        "select * from warranty where month(date) in(:month)",
        { replacements: { month: ["1", "2", "3"] } }
      );
      res.json(warranty);
    } else if (quarter == 2) {
      const [warranty] = await sequelize.query(
        "select * from warranty where month(date) in(:month)",
        { replacements: { month: ["4", "5", "6"] } }
      );
      res.json(warranty);
    } else if (quarter == 3) {
      const [warranty] = await sequelize.query(
        "select * from warranty where month(date) in(:month)",
        { replacements: { month: ["7", "8", "9"] } }
      );
      res.json(warranty);
    } else if (quarter == 4) {
      const [warranty] = await sequelize.query(
        "select * from warranty where month(date) in(:month)",
        { replacements: { month: ["10", "11", "12"] } }
      );
      res.json(warranty);
    }
  } catch (err) {
    console.log(err);
  }
};
