const express = require('express');
const uuid = require('uuid-random');

const app = express();

// Agregar esta linea para poder trabajar con post
app.use(express.json());

let messages = [];

// Rutas
app.get('/messages', (req, res) => {
  // controlador
  console.log('request GET /');
  // console.log(req);
  // res.status(200).send('<h1>Hola Mundo</h1>');
  // res.sendFile(`${__dirname}/views/index.html`);
  // res.json({ sender: 'Simon', message: 'Hola'})
  res.status(200).json(messages);
});

app.get('/messages/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);

  const message = messages.filter(message => message.id === id);

  res.status(200).json(message[0]);
})

// app.get('/movies/favorites', () => {
//   console.log('request GET /movies/favorites');
// });

app.post('/messages', (req, res) => {
  // console.log(req.body);
  const message = {
    ...req.body,
    id: uuid()
  };
  messages = messages.concat(message);
  res.status(200).send(message);
});

// http://localhost:3000?name=simon&lastname=hoyos
// app.put('/', (req, res) => {
//   console.log(req.query.name)
//   console.log(req.query.lastname)
// });

app.put('/messages/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  let i = -1;

  const message = messages.filter((message, index) => {
    if(message.id === id) {
      i = index;
      return true;
    }

    return false;
  })[0];
  console.log(message);
  const newData = req.body;

  const newMessage = {
    id: message.id,
    sender: newData.sender || message.sender,
    message: newData.message || message.message
  };

  // modificar el arreglo para cambiar el mensaje.
  // messages.splice(i, 1, newMessage);
  const firstHalf = messages.slice(0, i);
  const secondHalf = messages.slice(i + 1);
  messages = firstHalf.concat(secondHalf);

  res.status(200).json(newMessage);
});


app.delete('/messages/:id', (req, res) => {
  const id = req.params.id;
  let deletedMessage;
  messages = messages.filter(message => message.id != id);

  res.status(200).json(deletedMessage);
});

// Incializar el servidor
app.listen(3000, () => {
  console.log('App listening in port 3000');
});
