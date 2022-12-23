const { OrderModel } = require('../models/index')
const sequelize = require('../config/db.config')


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

exports.sellByMonth = async(req, res) => {
    try {
        const [ orders ] = await sequelize.query(
            "select * from orders where month(orderDate) = :month", 
            { replacements: { month: req.params.month } })
        res.json(orders)
    } catch (err) {
        console.log(err);
    }
}

exports.sellByYear = async(req, res) => {
    try {
        const [ orders ] = await sequelize.query(
            "select * from orders where year(orderDate) = :year", 
            { replacements: { year: req.params.year } })
        res.json(orders)
    } catch (err) {
        console.log(err);
    }
}

exports.sellByQuarter = async(req, res) => {
    try {
        const quarter = req.params.quarter
        if (quarter == 1) {
            const [ orders ] = await sequelize.query(
                "select * from orders where month(orderDate) in(:month)", 
                { replacements: { month: ['1', '2', '3'] } }
            )
            res.json(orders)
        }
        else if (quarter == 2) {
            const [ orders ] = await sequelize.query(
                "select * from orders where month(orderDate) in(:month)", 
                { replacements: { month: ['4', '5', '6'] } }
            )
            res.json(orders)
        }
        else if (quarter == 3) {
            const [ orders ] = await sequelize.query(
                "select * from orders where month(orderDate) in(:month)", 
                { replacements: { month: ['7', '8', '9'] } }
            )
            res.json(orders)
        }
        else if (quarter == 4) {
            const [ orders ] = await sequelize.query(
                "select * from orders where month(orderDate) in(:month)", 
                { replacements: { month: ['10', '11', '12'] } }
            )
            res.json(orders)
        }
    } catch (err) {
        console.log(err);
    }
}