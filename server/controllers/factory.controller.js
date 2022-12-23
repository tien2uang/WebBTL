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

// create and save
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
                message: "Some error occurred while creating the Tutorial."
            });
        });
}

