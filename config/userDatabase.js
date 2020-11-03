const Sequelize = require('sequelize');
require('dotenv').config()

//establishing connection with database
const userDB = new Sequelize(process.env.USER_DB_NAME, process.env.USER_DB_USER, process.env.USER_DB_PASS, {
    host: process.env.USER_DB_HOST,
    dialect: 'mysql'
});
try {
    userDB.authenticate()
      .then(() => {
        console.log('Connection has been established successfully to the user database.');
      });
  } catch (error) {
    console.error('Unable to connect to the user database:', error);
  }

module.exports = userDB;