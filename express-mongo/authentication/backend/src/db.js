const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/database';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options);

module.exports = mongoose.connection;
