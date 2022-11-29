const { OrderdetailModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const orderdetails = await OrderdetailModel.findAll()
        res.json(orderdetails)
    } catch(err) {
        console.log(err);
    }
}

