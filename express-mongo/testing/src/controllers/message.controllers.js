const Message = require('../models/message.model');

module.exports = {
  async get(req, res) {
    const messages = await Message.find();

    res.status(200).json(messages);
  },
  async create(req, res) {
    const data = req.body;
    const message = await Message.create(data);

    res.status(200).json(message)
  },
  async update(req, res) {
    const id = req.params.id;
    const data = req.body;
    const message = await Message.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json(message);
  },
  async delete(req, res) {
    const id = req.params.id;
    const data = req.body;
    const message = await Message.findByIdAndDelete(id);

    res.status(200).json(message);
  }
}
