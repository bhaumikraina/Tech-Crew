const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoDB = require('./db');
require('dotenv').config();
const dataRoutes = require('./routes/Data');
const reviewRoutes = require('./routes/reviewRoutes')
const OrderRoutes = require('./routes/OrderRoutes')

const userRoutes = require('./routes/user')

const app = express();

mongoDB();
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.use('/data', dataRoutes);

app.use('/api/user', userRoutes)

app.use('/users', reviewRoutes)
app.use('/order', OrderRoutes)

app.listen(process.env.PORT, () => {
  console.log('Listening on port ', process.env.PORT);
});
