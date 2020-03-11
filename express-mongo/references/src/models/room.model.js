const { Schema, model } = require('mongoose');

const roomSchema = new Schema({
  name: String,
  messages: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  }
}, {
  timestamps: true,
});

const Room = model('Room', roomSchema);

module.exports = Room;
