const { FactoryModel } = require('../models/index')

// create and save
// exports.create = (req, res) => {
//     if(!req.body.factoryID) {
//         res.status(400).send({
//             message: 'content cannot be empty'
//         })
//         return
//     }

//     const FactoryModel = {
//         factoryID: req.body.factoryID,
//         numberOfProduct: req.body.numberOfProduct,
//         phone: req.body.phone,
//         address: req.body.address,
//         state: req.body.state,
//         country: req.body.country
//     }
// }

exports.findAll = async (req, res) => {
    try {
        const factories = await FactoryModel.findAll()
        res.json(factories)
    } catch (err) {
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
        factoryID: req.body.storeID,
        numberOfProduct: req.body.numberOfProduct,
        phone: req.body.phone,
        address: req.body.address,
        state: req.body.state,
        country: req.body.country
    };

    FactoryModel.create(factories)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the FactoryModel."
            });
        });
}

exports.update = (req, res) => {
    const factoryID = req.params.factoryID;
    FactoryModel.update(req.body, {
        where: { factoryID: factoryID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "StoreModel was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update StoreModel with id=${storeID}. Maybe StoreModel was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating StoreModel with id=" + storeID
            });
        });
};


exports.delete = (req, res) => {
    const factoryID = req.params.factoryID;

    FactoryModel.destroy({
        where: { factoryID: factoryID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "FactoryModel was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete FactoryModel with id=${factoryID}. Maybe FactoryModel was not found!`
                });
            }
        })
        .catch(err => {
            f
            res.status(500).send({
                message: "Could not delete FactoryModel with id=" + factoryID
            });
        });
};

