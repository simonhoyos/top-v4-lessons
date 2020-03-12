const Room = require('../models/room.model');

module.exports = {
  async getAll(req, res) {
    try {
      const rooms =
        await Room.find().populate({ path: 'messages', populate: { path: 'sender', select: 'name' } });
      res.json(rooms);
    } catch(error) {
      res.json(error);
    }
  },
  async getOne(req, res) {
    const { id } = req.params;
    try {
      const room =
        await Room.findById(id).populate({ path: 'messages', populate: 'user' });
      // .populate('owner')
      // .populate('participants')
      // .populate('messages', 'sender')
      res.json(room);
    } catch(error) {
      res.json(error);
    }
  },
  async create(req, res) {
    try {
      const room = await Room.create(req.body);
      res.json(room);
    } catch(error) {
      res.json(error);
    }
  },
  update(req, res) {
    const { id } = req.params;
    const options = {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    };
    Room.findByIdAndUpdate(id, req.body, options)
      .then(room => res.json(room))
      .catch(error => res.json(error));
  },
  delete(req, res) {
    const { id } = req.params;
    Room.findByIdAndDelete(id)
      .then(room => res.json(room))
      .catch(error => res.json(error));
  },
};
