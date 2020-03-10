const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/notes-example';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);

const connection = mongoose.connection;

module.exports = connection;
