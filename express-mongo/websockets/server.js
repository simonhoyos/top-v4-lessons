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

  // socket.on('message', data => {
    // socket.emit('message', data); // emitir a la misma conexion
    // io.emit('message', data); // emitir a todos los conectados
  //   socket.broadcast.emit('message', data) // emitir a todos menos a la misma conexion
  // });

  socket.on('disconnect', () => {
    console.log('disconneted');
  });
});

const group = io.of('/group').on('connection', socket => {
  console.log('connected to group');
  socket.emit(
    'open',
    'Hola, bienvenido a group!',
    'Este es un chat abierto',
    () => {
      console.log('message received');
    }
  );

  socket.on('message', (data, cb) => {
    // socket.emit('message', data); // emitir a la misma conexión
    // group.emit('message', data); // emitir a todas las conexiones del grupo
    cb();
  })
})

http.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
