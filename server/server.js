const express = require('express');
const app = express();

//importing mongoose and DB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contact_keeper');
mongoose.connection.once('open', ()=> {
    console.log('connected to DB on robo3t');
});

app.use(express.json({extended: false }));

app.get('/', (req, res) => res.json({msg:'welcome to the ContactKeeper API...'}));

app.use('/api/users', require('../server/routes/users'));
app.use('/api/contacts', require('../server/routes/contacts'));
app.use('/api/auth', require('../server/routes/auth'));

const PORT = process.env.PORT || 5500;

app.listen(PORT, function () {
    console.log('Listening on port: ', PORT);
});