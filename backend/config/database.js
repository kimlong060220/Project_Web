const Sequelize = require('sequelize')

module.exports = new Sequelize("techzones", "root", "Tanlenghia06032000", {
    host: "localhost",
    dialect: "mysql",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
  });