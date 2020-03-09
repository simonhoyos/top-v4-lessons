const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
}, {
  timestamps: true
});
const User = mongoose.model('User', userSchema);
// Message => messages
// Task => tasks
// Recipe => recipes

app.get('/users', (req, res) => {
  User.find()
    .then(users => {
      // res.render('index', { users });
      res.json(users)
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

app.post('/users', (req, res) => {
  // const user = new User({ name: 'Simon', age: 28, email: 'simon@test.com' });
  // user.save()
  // User.create({ name: 'Pedro', age: 30 })
  //   .then(user => console.log(user))
  //   .catch()
  User.insertMany([{ name: 'Maria', age: 25 } , { name: 'Ana', age: 32 }])
    .then(users => console.log(users))
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;

  // responden con el usuario modificado
  // User.findByIdAndUpdate(id, data)
  // User.findOneAndUpdate({ name: 'Simon' }, { age: 29 }, {
  //   useFindAndModify: false,
  // })
  //   .then(user => console.log(user))
  User.update({ name: 'Ana' }, { age: 18 }, { multi: true })
  // User.updateOne({ name: 'Pedro' }, { age: 31 })
  // User.updateMany({ name: 'Maria' }, { age: 12 })
    .then(updateInfo => console.log(updateInfo));
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;

  // User.findByIdAndDelete(id)
  // User.findOneAndDelete()
    // .then(user => console.log(user))

  // User.deleteOne()
  User.deleteMany({ name: 'Maria' })
    .then(deleteInfo => console.log(deleteInfo));
});

mongoose.connect('mongodb://localhost:27017/club', {
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
