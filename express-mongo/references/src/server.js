const express = require('express');
const connection = require('./db');
const userRouter = require('./routes/user');
const messageRouter = require('./routes/message');
const roomRouter = require('./routes/room');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/messages', messageRouter);
app.use('/rooms', roomRouter);

connection.once('open', () => console.log('Connection established successfully'));

connection.on('error', err => console.log('Something went wrong!', err));

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));

// async function fetchUser() {
//   try {
//     const data = await fetch('/users/:id');
//     const user = await data.json();
//   } catch(err) {
//     console.log(err)
//   } finally {
//     console.log('finally')
//   }
// }

// fetch('/users/:id')
//   .then(data => data.json())
//   .then(user => console.log(user))
//   .catch(error => console.log(error))
//   .finally(() => console.log('finally'))
