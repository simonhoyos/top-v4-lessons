const Message = require('../models/message.model');
const User = require('../models/user.model');
const Room = require('../models/room.model');

module.exports = {
  async getAll(req, res) {
    try {
      const messages = await Message.find().populate('sender', 'name email -_id')
      res.json(messages);
    } catch(error) {
      res.json(error);
    }
  },
  getOne(req, res) {
    const { id } = req.params;
    Message.findById(id)
      .populate({
        path: 'sender',
        select: 'name',
      })
      .then(message => res.json(message))
      .catch(error => res.json(error));
  },
  // /rooms/:roomId/messages
  async create(req, res) {
    const roomId = '5e6948134d33e32509edd57f';
    const userId = '5e694234ffce9a2260c2501e';
    // req.session.user._id
    try {
      const room = await Room.findById(roomId);
      const user = await User.findById(userId);
      const message = await Message.create({ ...req.body, sender: user });

      room.messages.push(message);
      await room.save()

      res.json(message);
    } catch (error) {
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
    Message.findByIdAndUpdate(id, req.body, options)
      .then(message => res.json(message))
      .catch(error => res.json(error));
  },
  delete(req, res) {
    const { id } = req.params;
    Message.findByIdAndDelete(id)
      .then(message => res.json(message))
      .catch(error => res.json(error));
  },
};
