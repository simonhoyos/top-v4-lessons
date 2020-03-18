const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  display: {
    type: Boolean,
    default: false,
  },
  plates:{
    type: [{ type: Schema.Types.ObjectId, ref: 'Plate' }],
    validate: {
      validator: (value) => value.length > 0,
      message: 'You must assign at least one plate',
    },
  },
}, {
  timestamps: true,
});

const Menu = model('Menu', menuSchema);

module.exports = Menu;
