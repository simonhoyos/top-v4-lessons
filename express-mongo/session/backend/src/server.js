require('dotenv').config();

const express = require('express');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const connection = require('./db');
const User = require('./models/user.model');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// app.use(cookieParser());
app.use(cookieSession({
  secret: process.env.SECRET,
  maxAge: 1000 * 60 * 60 * 24,
}));

const verify = (req, res, next) => {
  // if(req.cookies.id) {
  if(!req.session.user) {
    res.sendStatus(401);
  }

  next();
}

// El usuario debe de estar autenticado.
app.get('/', verify, (req, res) => {
  console.log(req.session)
  res.sendStatus(200);
});

app.get('/login', (req, res) => {
  const email = req.body.email || 'simon@test.com';
  const password = req.body.password || '12345';

  User.findOne({ email })
    .then(user => {
      if(user.password === password) {
        // res.cookie('id', user.id, {
          // domain: '.google.com',
          // maxAge: 1000 * 60 * 60 * 24 * 365,
          // expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
        // });
        req.session.user = user;
        res.sendStatus(200);
        return;
      }

      res.status(401).send('Usuario o contraseña invalida');
    })

});

app.post('/signup', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user));
});

connection.once('open', () => console.log('Connection established successfully'));

connection.on('error', err => console.log('Something went wrong!', err));

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
