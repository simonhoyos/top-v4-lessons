const { Schema, model } = require('mongoose');

const plateSchema = new Schema({
  ingredients: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  menus: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Menu' }],
    default: [],
  }
}, {
  timestamps: true,
});

const Plate = model('Plate', plateSchema);

module.exports = Plate;
