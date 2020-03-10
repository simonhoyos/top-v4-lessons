const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const noteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  isPublic: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

const Note = model('Note', noteSchema);

module.exports = Note;
