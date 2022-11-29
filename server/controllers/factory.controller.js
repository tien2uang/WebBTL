const { FactoryModel } = require('../models/index')

// create and save
// exports.create = (req, res) => {
//     if(!req.body.factoryID) {
//         res.status(400).send({
//             message: 'content cannot be empty'
//         })
//         return
//     }

//     const FactoryModel = {
//         factoryID: req.body.factoryID,
//         numberOfProduct: req.body.numberOfProduct,
//         phone: req.body.phone,
//         address: req.body.address,
//         state: req.body.state,
//         country: req.body.country
//     }
// }

exports.findAll = async (req, res) => {
    try {
        const factories = await FactoryModel.findAll()
        res.json(factories)
    } catch(err) {
        console.log(err);
    }
}

exports.findOne = async (req, res) => {
    try {
        const factories = await FactoryModel.findByPk(req.params.factoryID)
        res.json(factories)
    } catch (err) {
        console.log(err);
    }
}