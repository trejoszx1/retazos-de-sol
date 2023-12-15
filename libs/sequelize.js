// ORM TO DATABES CONECCTION

const { Sequelize } = require('sequelize');


const {config} = require('./../config/config');

const setupModels = require('./../db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging:  true,
});

setupModels(sequelize);  // recibe la configuracion de user etc

//sequelize.sync(); //se va a utilizar por migraciones , no es recomendable en produccion ya que elimina datos y sobre escribe

module.exports = sequelize;
