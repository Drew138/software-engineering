const Sequelize = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;
<<<<<<< HEAD
const sqlize = new Sequelize(DATABASE_URL) 
=======
const sqlize = new Sequelize(DATABASE_URL); 
>>>>>>> bc89ade88faa1ceffb04f4da20496f838b4950f9

module.exports = sqlize;