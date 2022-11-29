const { CustomerModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const customers = await CustomerModel.findAll()
        res.json(customers)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const customers = await CustomerModel.findByPk(req.params.customerID)
        res.json(customers)
    } catch (err) {
        console.log(err);
    }
}