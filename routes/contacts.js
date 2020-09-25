const express = require('express');
const { GraphQLString } = require("graphql");
const router = express.Router();
const db = require('../config/database');
const Contact = require('../models/Contact')

router.get('/', (req, res) => 
Contact.findAll()
  .then(contacts => {
    console.log(contacts)
    res.sendStatus(200);
  })
  .catch(err => console.log(err)));

module.exports = router;