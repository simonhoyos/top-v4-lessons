const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  sender: String,
  body: String,
}, {
  timestamps: true,
});

const Message = model('Message', messageSchema);

module.exports = Message;
