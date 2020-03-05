const express = require('express');
const uuid = require('uuid-random');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

let authors = [];
let notes = [];

app.get('/', (req, res) => {
  res.render('index', { title: 'Notes', notes });
});

app.get('/authors', (req, res) => {
  res.render('authors', { title: 'Authors' });
});

app.get('/authors/:id', (req, res) => {
  const id = req.params.id;
  const [author] = authors.filter(author => author.id === id);
  res.render('author', { title: author.name });
});

app.post('/authors', (req, res) => {
  const data = req.body;
  const id = uuid();
  const author = {
    ...data,
    id,
  };

  authors.push(author);

  res.redirect(`/authors/${id}`);
});

app.get('/notes', (req, res) => {
  res.render('notes', { title: 'Notes', authors });
});

app.get('/notes/:id', (req, res) => {
  const id = req.params.id;
  const [note] = notes.filter(note => note.id === id);
  res.render('note', { title: note.title, note: note });
});

app.post('/notes', (req, res) => {
  const data = req.body;
  const id = uuid();
  const note = {
    ...data,
    id,
  };

  notes.push(note);

  res.redirect(`/notes/${id}`)
})

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
