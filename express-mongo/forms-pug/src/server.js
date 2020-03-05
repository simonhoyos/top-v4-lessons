const express = require('express');
const uuid = require('uuid-random');

const app = express();
const port = 3000;

app.use(express.urlencoded());

app.set('view engine', 'pug');

const messages = [
  {
    sender: 'Simon',
    message: 'hola mundo',
    id: uuid(),
  }
]

app.get('/messages', (req, res) => {
  res.render('index');
});

app.get('/messages/:id', (req, res) => {
  const id = req.params.id;

  const message = messages.filter(message => message.id === id);

  res.render('message', { message });
});

app.post('/messages', (req, res) => {
  const data = req.body;
  const id = uuid();
  const message = {
    ...data,
    id
  };

  messages.push(message);

  res.redirect(`/messages/${id}`);
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
