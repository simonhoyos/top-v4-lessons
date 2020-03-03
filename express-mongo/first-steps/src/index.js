const express = require('express');

const app = express();

// Agregar esta linea para poder trabajar con post
app.use(express.json());

const messages = [];

// Rutas
app.get('/', (req, res) => {
  // controlador
  console.log('request GET /');
  // console.log(req);
  // res.status(200).send('<h1>Hola Mundo</h1>');
  // res.sendFile(`${__dirname}/views/index.html`);
  // res.json({ sender: 'Simon', message: 'Hola'})
  res.json(messages);
});

// app.get('/movies/favorites', () => {
//   console.log('request GET /movies/favorites');
// });

app.post('/', (req, res) => {
  // console.log(req.body);
  messages.push(req.body);
  res.status(200).send('Todo Ok!');
});

// app.put('', () => {});
// app.delete('', () => {});

// Incializar el servidor
app.listen(3000, () => {
  console.log('App listening in port 3000');
});
