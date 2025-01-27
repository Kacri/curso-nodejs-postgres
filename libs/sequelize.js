const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  // SERVIDOR DE BASE DE DATOS CON Q LA TRABAJAS
  //dialect:'postgres',
  dialect:'mysql',
  logging: true
});

setupModels(sequelize);
//SICRONICE
//sequelize.sync();

module.exports = sequelize;
