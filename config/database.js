const sequelize = require('sequelize');
const PORT = process.env.PORT || 5000;

module.exports = new sequelize('micaddressbook', 'micaddressbook', 'Yq8rAun?w-Uz', {
  host: "den1.mysql4.gear.host",
  dialect: 'mysql',
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});