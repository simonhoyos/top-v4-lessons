const Order = require('../models/order.model');

module.exports = {
  async getAll(req, res) {
    try {
      const orders = await Order.find().populate('plates');

      res.status(200).json(orders);
    } catch (error) {
      res.status(401).json({ error });
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const order = await Order.findById(id).populate('plates');
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async create(req, res) {
    try {
      const order = await Order.create(req.body);
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const options = {
        new: true,
        runValidations: true,
        useFindAndModify: false,
      };
      const order = await Order.findByIdAndUpdate(id, req.body, options).populate('plates');
      res.status(200).json(order);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}
