const express = require('express');
const messageRouter = require('./routes/message');
const connection = require('./db');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
})

app.use('/messages', messageRouter);

module.exports = app;
