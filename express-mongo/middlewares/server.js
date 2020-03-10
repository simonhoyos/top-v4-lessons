const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

function logRequest(config) {
  return function(req, res, next) {
    console.log(config);
    console.log('Recibiendo una petición');
    req.user = 'Simon';
    next();
  }
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Algo salió mal! Intenta de nuevo más tarde!');
}

// const logmiddleware = logRequest('hola');

app.use('/users/?$', logRequest('hola'));
app.use(morgan('common'));
app.use(express.json()); // Content-Type: application/json
app.use(express.urlencoded({ extended: false })); // Content-Type: application: x-www-form-urlencoded
app.use(cors());
app.use(errorHandler);

app.get('/', (req, res) => {
  console.log('Enviando respuesta');
  res.send('Hola mundo');
});

app.get('/users', logRequest('mundo'), (req, res) => {
  console.log('Enviando usuario', req.user);
  res.send('hola user');
})

app.post('/', (req, res) => {
  console.log(req.body);
})

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
