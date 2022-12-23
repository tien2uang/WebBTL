const { ProductModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const products = await ProductModel.findAll()
        res.json(products)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const products = await ProductModel.findByPk(req.params.productID)
        res.json(products)
    } catch (err) {
        console.log(err);
    }
}


exports.addProduct = async (req, res) => {
    if (!req.body.productID) {
        res.status(400).send({
            message: "Content can not be empty!"
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
    };

    ProductModel.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while creating the Tutorial."
            });
        });
}