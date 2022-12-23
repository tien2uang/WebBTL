const { ProductlineModel } = require('../models/index')

exports.findAll = async (req, res) => {
    try {
        const productlines = await ProductlineModel.findAll()
        res.json(productlines)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const productlines = await ProductlineModel.findByPk(req.params.productLine)
        res.json(productlines)
    } catch (err) {
        console.log(err);
    }
}


exports.exportToStore = async (req, res) => {
    if (!req.body.storeID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const productline = {
        productLine: req.body.productLine,
        storeID: req.body.storeID,
        description: req.body.description
    };

    ProductlineModel.create(productline)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
}
