const express = require('express');
const { GraphQLString } = require("graphql");
const router = express.Router();
const db = require('../config/database');
const Contact = require('../models/Contact')

//Get All
router.get('/', (req, res) => 
Contact.findAll()
  .then(contacts => {
    res.render('contacts', {contacts})
  })
  .catch(err => console.log(err)));

router.get('/:id', (req, res) => 
Contact.findOne({
  where: {
    id: req.params.id
  }
})
  .then(contacts => console.log("It WOrked"))
.catch(err => console.log(err)));


// Create

router.get('/add', (req, res) => {
const data = {
  name: 'David Lee Roth',
  role: "Frontman",
  email: 'DLH@5150.com',
  phone: '208-123-1978'
}

let { name, role, email, phone } = data

//Insert into table
Contact.create({
  name,
  role,
  email,
  phone
})
.then(contact => res.redirect('/contacts'))
.catch(err => console.log(err));
});

module.exports = router;