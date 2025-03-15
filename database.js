const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_database', 'your_user', 'your_password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;