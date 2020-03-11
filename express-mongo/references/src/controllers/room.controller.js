const Room = require('../models/room.model');

module.exports = {
  getAll(req, res) {
    Room.find()
      .populate('messages')
      .then(rooms => res.json(rooms))
      .catch(error => res.json(error));
  },
  getOne(req, res) {
    const { id } = req.params;
    Room.findById(id)
      .populate({ path: 'messages', populate: 'user' })
      // .populate('owner')
      // .populate('participants')
      // .populate('messages', 'sender')
      .then(room => res.json(room))
      .catch(error => res.json(error));
  },
  create(req, res) {
    Room.create(req.body)
      .then(room => res.json(room))
      .catch(error => res.json(error));
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
