const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./../data/database.js');

// class User extends Model {}

// User.init({
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   idUser: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     autoIncrement: true,
//     primaryKey: true 
//   }
// });

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true

const User = sequelize.define("Users",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
    }
},{
    timestamps: false
});

module.exports = User;