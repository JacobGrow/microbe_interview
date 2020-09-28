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


router.post('/add', (req, res) => {

let { name, role, email, phone } = req.body
let errors = [];

// Field Validation
if(!name){
  errors.push({ text: 'Please add a name'});
}
if(!role){
  errors.push({ text: 'Please add a role'});
}
if(!email){
  errors.push({ text: 'Please add a email'});
}
if(!phone){
  errors.push({ text: 'Please add a phone number'});
}

// Error Check
if(errors.length > 0){
  console.log("WHY")
  res.render('add', {
    errors,
    name,
    role,
    email,
    phone
  });

}
else{
  //Insert into table
  Contact.create({
    name,
    role,
    email,
    phone
  })
  .then(contact => res.redirect('/contacts'))
  .catch(err => console.log(err));
}

});

//Delete
router.delete('/delete/:id', (req, res) => {
  Contact.destroy({
    where: {
      id: req.params.id
    }
  })
 
  .then(() => res.send("Successfully deleted."))
  .catch(err => console.log(err))
});

//Update
router.put('/edit/:id', (req, res) => {
  Contact.update({
    name: req.body.name,
    role: req.body.role,
    phone: req.body.phone,
    email: req.body.email
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(() => res.send("success"))
  .catch(err => console.log(err));
})


module.exports = router;