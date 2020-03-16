const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  sender: {
    type: String,
    required: [true, 'sender is required'],
  },
  body: String,
}, {
  timestamps: true,
});

const Message = model('Message', messageSchema);

module.exports = Message;
