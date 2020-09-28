const Sequelize = require('sequelize');
const db = require('../config/database');

const Contact = db.define('contact', {
  
  name: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }

},

{timestamps: false}

);



module.exports = Contact;