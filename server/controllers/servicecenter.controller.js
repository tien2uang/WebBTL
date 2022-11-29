const { ServiceCenterModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const servicecenters = await ServiceCenterModel.findAll()
        res.json(servicecenters)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const servicecenters = await ServiceCenterModel.findByPk(req.params.servicecenterID)
        res.json(servicecenters)
    } catch (err) {
        console.log(err);
    }
}