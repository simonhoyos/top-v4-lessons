const express = require('express');
const connection = require('./db');
const User = require('./models/user.model');

const app = express();
const port = 3000;

app.post('/users', (req, res) => {
  User.create({ name: 'Maria', age: '28', email: 'simon@test.com' })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const opt = {
    runValidators: true,
  };

  User.findByIdAndUpdate(id, data, opt)
})

connection.once('open', () => console.log('Connection established successfully'));

connection.on('error', err => console.log('Something went wrong!', err));

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
