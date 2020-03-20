const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const categoryRouter = require('./routes/category');
// const bookRouter = require('./routes/book');
const { sequelize } = require('./db');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('hola mundo');
});

app.use('/categories', categoryRouter);
// app.use('/categories/:categoryId/books', bookRouter);

sequelize.sync();

module.exports = app;
