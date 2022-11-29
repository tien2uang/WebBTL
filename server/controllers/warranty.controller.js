const { WarrantyModel } = require('../models/index')


exports.findAll = async (req, res) => {
    try {
        const warranties = await WarrantyModel.findAll()
        res.json(warranties)
    } catch(err) {
        console.log(err);
    }
}