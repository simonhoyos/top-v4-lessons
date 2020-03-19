const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connection = require('./db');
const plateRouter = require('./routes/plate');
const menuRouter = require('./routes/menu');
const adminRouter = require('./routes/admin');
const costumerRouter = require('./routes/costumer');
const orderRouter = require('./routes/order');
const { auth } = require('./utils/middlewares');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.use('/plates', auth, plateRouter);
app.use('/menus', auth, menuRouter);
app.use('/admins', adminRouter);
app.use('/costumers', costumerRouter);
app.use('/orders', auth, orderRouter);

module.exports = app;
