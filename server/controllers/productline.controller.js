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