// ----- Begin your project below! -----
const express = require('express');
// const apiRouter = require('./routes')
const app = express();
const PORT = process.env.PORT || 5000;

//Database
const db = require('./config/database')



//Test DB

db.authenticate()
    .then(() => console.log('Database Connected...'))
    .catch(err => console.log('Error:' + err))


app.use(express.json());

// app.use('/api/contacts', apiRouter)

app.get('/', (req, res) => res.send('PLS WORK'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`)

)
