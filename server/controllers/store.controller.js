const { StoreModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const stores = await StoreModel.findAll()
        res.json(stores)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const stores = await StoreModel.findByPk(req.params.storeID)
        res.json(stores)
    } catch (err) {
        console.log(err);
    }
}


