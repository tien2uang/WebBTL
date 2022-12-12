const config = require('./db')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  config.DATABASE, 
  config.USER, 
  config.PASSWORD,
  {
    dialect: config.DIALECT,
    host: config.HOST,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
  
module.exports = sequelize;