const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  plates: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Plate' }],
    required: true,
    validate: {
      validator: value => value.length > 0,
      massage: 'You must add at least one plate to your order',
    },
  },
  state: {
    type: String,
    enum: ['PENDING', 'SERVED'],
    default: 'PENDING',
  },
}, {
  timestamps: true,
});

const Order = model('Order', orderSchema);

module.exports = Order;
