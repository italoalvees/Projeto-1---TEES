const {Sequelize} = require('sequelize');

var sequelize = new Sequelize("SKomglgzey", "SKomglgzey", "NZAKcNRyKU", {
    host: "remotemysql.com",
    port: "3306",
    dialect: "mysql"
});

// exports.users = [];
// exports.id = 1;

module.exports = sequelize;

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }

