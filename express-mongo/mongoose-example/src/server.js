const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const userSchema = new mongoose.Schema({
  name: String,
});
const User = mongoose.model('User', userSchema);

app.get('/users', (req, res) => {
  User.find()
    .then(users => {
      res.render('index', { users });
    })
    .catch(err => {
      res.status(404).send(err);
    });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;

  User.findOne({ name: 'Maria' })
  // User.findById(id)
    .then(user => {
      console.log(user);
    })
    .catch(err => {
      res.status(404).send(err);
    })
});

mongoose.connect('mongodb://localhost:27017/example', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on(
  'error',
  err => console.log('Something went wrong!', err)
);

mongoose.connection.once(
  'open',
  () => console.log('Connection to DB established!')
);

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
