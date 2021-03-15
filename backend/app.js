const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

const api = process.env.API_URL;
const MongoURLUser = process.env.MONGO_URL_USER

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: 'dresser',
        image: 'some_url',
    }
    res.send(product);
})

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})

mongoose.connect(MongoURLUser, {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'daintree-database'})
.then(() => {
    console.log('Connection Succesful to MongoDB');
})
.catch((err) => {
    console.log(err)
})

app.listen(3000, () => {
    console.log('Server is successfully running on Localhost:3000');
})