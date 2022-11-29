const { ProductRecallModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const productRecalls = await ProductRecallModel.findAll()
        res.json(productRecalls)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const productRecalls = await ProductRecallModel.findByPk(req.params.productLine)
        res.json(productRecalls)
    } catch (err) {
        console.log(err);
    }
}