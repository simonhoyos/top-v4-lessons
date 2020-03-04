const express = require('express');

const app = express();

app.set('view engine', 'pug');
// app.set('views', './views'); // opcional

app.get('/messages', (req, res) => {
  res.render('index');
});

app.listen(3000, () => console.log(`Server listening on http://localhost:3000`));
