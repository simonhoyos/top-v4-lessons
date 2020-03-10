const express = require('express');
const cors = require('cors');
const connection = require('./db');
const notesRouter = require('./routes/notes');
const notesController = require('./controllers/notes.controller')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// app.use('/notes', notesRouter);

app.get('/notes', notesController.getAll);
app.get('/notes/:id', notesController.getOne);
app.post('/notes', notesController.create);
app.put('/notes/:id', notesController.update);
app.delete('/notes/:id', notesController.delete);

connection.on(
  'error',
  err => console.error('Something went wrong!', err),
);

connection.once(
  'open',
  () => console.log('MongoDB database connection established successfully!'),
);

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
