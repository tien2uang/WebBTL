const { ServiceCenterModel } = require('../models/index')
const sequelize = require('../config/db.config')

exports.findAll = async (req, res) => {
    try {
        const servicecenters = await ServiceCenterModel.findAll()
        res.json(servicecenters)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const servicecenters = await ServiceCenterModel.findByPk(req.params.servicecenterID)
        res.json(servicecenters)
    } catch (err) {
        console.log(err);
    }
}

exports.create = async (req, res) => {
    if (!req.body.servicecenterID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const servicecenters = {
        servicecenterID: req.body.servicecenterID,
        address: req.body.address,
    };

    ServiceCenterModel.create(servicecenters)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while creating the service center."
            });
        });
}

exports.update = (req, res) => {
    const servicecenterID = req.body.servicecenterID;

    ServiceCenterModel.update(
        {
            address: req.body.address
        }, 
        { where: { servicecenterID: servicecenterID }}
        )
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "ServiceCenterModel was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update ServiceCenterModel with id=${servicecenterID}. Maybe ServiceCenterModel was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating ServiceCenterModel with id=" + servicecenterID
            });
        });
};

exports.delete = (req, res) => {
    const servicecenterID = req.body.servicecenterID;

    ServiceCenterModel.destroy({
        where: { servicecenterID: servicecenterID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Service center was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Service center with id=${servicecenterID}. Maybe Service center was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Service center with id=" + servicecenterID
            });
        });
};


exports.receive = async(req, res) => {
    try {
        const [ products ] = await sequelize.query(
            "select\
            servicecenters.*,\
            customers.customerID, customerName, customerAddress, customerPhone,\
            products.*\
            from warranty\
            join customers\
            on warranty.customerID = customers.customerID\
            join products\
            on customers.productID = products.productID\
            join servicecenters\
            on warranty.servicecenterID = servicecenters.servicecenterID\
            where warrantyStatus = 'Return to factory'"
        )
        res.json(products)
    } catch (err) {
        console.log(err);
    }
}