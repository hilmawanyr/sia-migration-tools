const Sequelize = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(`mysql://${config.dbuser}:${config.dbpass}@${config.dbhost}:${config.dbport}/${config.dbname}`);
module.exports = { sequelize, Sequelize };