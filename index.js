// ----- Begin your project below! -----
const express = require('express');
const PORT = process.env.PORT || 5000;
const exphbs = require('express-handlebars');



//Database
const db = require('./config/database')



//Test DB

db.authenticate()
.then(() => console.log('Database Connected...'))
.catch(err => console.log('Error:' + err))

const app = express();

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.json());

//Contact routes
app.use('/contacts', require('./routes/contacts'));

// app.get('/', (req, res) => res.send('PLS WORK'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`)

)
