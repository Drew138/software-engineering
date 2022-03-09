const Sequelize = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;
const sqlize = new Sequelize(DATABASE_URL); 

module.exports = sqlize;