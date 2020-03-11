const Message = require('../models/message.model');
const User = require('../models/user.model');
const Room = require('../models/room.model');

module.exports = {
  getAll(req, res) {
    Message.find()
      .populate('sender', 'name email -_id')
      .then(messages => res.json(messages))
      .catch(error => res.json(error));
  },
  getOne(req, res) {
    const { id } = req.params;
    Message.findById(id)
      .populate({
        path: 'sender',
        select: 'name'
      })
      .then(message => res.json(message))
      .catch(error => res.json(error));
  },
  create(req, res) {
    const roomId = '5e6948134d33e32509edd57f';
    const userId = '5e694234ffce9a2260c2501e';
    Room.findById(roomId)
      .then(room => {
        console.log(room)
        User.findById(userId)
          .then(user => {
            console.log(user)
            Message.create({
              ...req.body,
              sender: user,
            })
              .then(message => {
                console.log(message)
                room.messages.push(message);
                room.save()
                  .then(() => res.json(message))
                  .catch(error => res.json(error));
              })
              .catch(error => res.json(error));
          })
          .catch(error => res.json(error));
      })
      .catch(error => res.json(error))
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
