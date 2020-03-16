const express = require('express');
const messageRouter = require('./routes/message');
const userRouter = require('./routes/user');
const connection = require('./db');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use('/messages', messageRouter);
app.use('/users', userRouter);

module.exports = app;
