const express = require('express');
const uuid = require('uuid-random');

const app = express();

app.set('view engine', 'pug');
// app.set('views', './views'); // opcional

const messages = [
  {
    sender: 'Simon',
    message: 'Hola',
    id: uuid(),
  },
  {
    sender: 'Maria',
    message: 'Mundo',
    id: uuid(),
  }
];

app.get('/', (req, res) => {
  res.render(
    'index',
    {
      title: 'Un titulo',
      description: 'lorem ipsum dolor sit ammet',
      authenticated: true
    }
  );
});

app.get('/messages', (req, res) => {
  res.render('messages', { messages });
});

app.get('/messages/:id', (req, res) => {
  const id = req.params.id;
  const message = messages.filter(message => message.id === id)[0];
  res.render('message', message);
})

app.listen(3000, () => console.log(`Server listening on http://localhost:3000`));
