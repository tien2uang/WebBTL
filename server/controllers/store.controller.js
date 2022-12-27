const { StoreModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const stores = await StoreModel.findAll()
        res.json(stores)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const stores = await StoreModel.findByPk(req.params.storeID)
        res.json(stores)
    } catch (err) {
        console.log(err);
    }
}

exports.create = async (req, res) => {
    if (!req.body.storeID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const stores = {
        storeID: req.body.storeID,
        factoryID: req.body.factoryID,
        address: req.body.address,
    };

    StoreModel.create(stores)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while creating the store."
            });
        });
}

exports.update = (req, res) => {
    const storeID = req.body.storeID;

    StoreModel.update(
        {
            factoryID: req.body.factoryID,
            address: req.body.address
        }, 
        { where: { storeID: storeID }}
        )
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
    const storeID = req.body.storeID;

    StoreModel.destroy({
        where: { storeID: storeID }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Store was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Store with id=${storeID}. Maybe Store was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Store with id=" + storeID
            });
        });
};
