const { requestModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const requests = await requestModel.findAll()
        res.json(requests)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const requests = await requestModel.findByPk(req.params.storeID)
        res.json(requests)
    } catch (err) {
        console.log(err);
    }
}