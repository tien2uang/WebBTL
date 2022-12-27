const { FactoryModel } = require('../models/index')

exports.findAll = async (req, res) => {
    try {
        const factories = await FactoryModel.findAll()
        res.json(factories)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const factories = await FactoryModel.findByPk(req.params.factoryID)
        res.json(factories)
    } catch (err) {
        console.log(err);
    }
}

exports.create = async (req, res) => {
    if (!req.body.factoryID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const factories = {
        factoryID: req.body.factoryID,
        numberOfProduct: req.body.numberOfProduct,
        phone: req.body.phone,
        address: req.body.address,
        state: req.body.state,
        country: req.body.country,
    };

    FactoryModel.create(factories)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while creating the factory."
            });
        });
}


exports.update = (req, res) => {
    const factoryID = req.body.factoryID;

    FactoryModel.update(
        {
            numberOfProduct: req.body.numberOfProduct,
            phone: req.body.phone,
            address: req.body.address,
            state: req.body.state,
            country: req.body.country,
        }, 
        { where: { factoryID: factoryID }}
        )
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "FactoryModel was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update FactoryModel with id=${factoryID}. Maybe FactoryModel was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating FactoryModel with id=" + factoryID
            });
        });
};

exports.delete = (req, res) => {
    const factoryID = req.body.factoryID;

    FactoryModel.destroy({
        where: { factoryID: factoryID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Factory was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Factory with id=${factoryID}. Maybe Factory was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Factory with id=" + factoryID
            });
        });
};
