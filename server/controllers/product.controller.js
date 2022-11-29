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