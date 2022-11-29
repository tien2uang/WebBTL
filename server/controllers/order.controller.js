const { OrderModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const orders = await OrderModel.findAll()
        res.json(orders)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const orders = await OrderModel.findByPk(req.params.orderID)
        res.json(orders)
    } catch (err) {
        console.log(err);
    }
}