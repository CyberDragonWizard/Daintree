const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const authJwt = require('./helpers/jwt');
const errorhandler = require('./helpers/error-handler')
const mongoose = require('mongoose');
require('dotenv/config');

const MongoURLUser = process.env.MONGO_URL_USER

//Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorhandler);

//CORS
app.use(cors());
app.options('*', cors());

//Routes
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');

app.use('/api/v1/products', productsRouter);
app.use('/api/v1/categories', categoriesRouter);
app.use('/api/v1/orders', ordersRouter);
app.use('/api/v1/users', usersRouter)

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