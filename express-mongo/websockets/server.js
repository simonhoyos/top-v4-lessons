const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

io.on('connection', socket => {
  console.log('new connection');
  socket.emit('open', 'Hola, bienvenido a WebSockets!')

  socket.on('loquesea', data => {
    console.log(data);
  })

  socket.on('message', data => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('disconneted');
  });
});

http.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
