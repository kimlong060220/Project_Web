// import DataTypes from 'sequelize';
const { DataTypes }  = require('sequelize');

const db = require('../config/database');
const User = db.define("User", {
      id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        unique: true
      },
      password: {
          type: DataTypes.STRING,
          required: true
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        default: false,
        required: true
      }
    },{
        freezeTableName: true
      })

module.exports = User;
