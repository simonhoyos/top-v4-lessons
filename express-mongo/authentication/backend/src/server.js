require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connection = require('./db');
const userRouter = require('./routes/user');
const { auth } = require('./utils/middlewares');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.get('/private', auth, (req, res) => {
  console.log(req.user);
  const user = req.user;
  res.status(200).json(user);
});

connection.once('open', () => console.log('Connection established successfully'));

connection.on('error', err => console.log('Something went wrong!', err));

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
