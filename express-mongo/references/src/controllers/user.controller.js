const User = require('../models/user.model');

module.exports = {
  getAll(req, res) {
    User.find()
      .then(users => res.json(users))
      .catch(error => res.json(error));
  },
  getOne(req, res) {
    const { id } = req.params;
    User.findById(id)
      .then(user => res.json(user))
      .catch(error => res.json(error));
  },
  create(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(error => res.json(error));
  },
  update(req, res) {
    const { id } = req.params;
    const options = {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    };
    User.findByIdAndUpdate(id, req.body, options)
      .then(user => res.json(user))
      .catch(error => res.json(error));
  },
  delete(req, res) {
    const { id } = req.params;
    User.findByIdAndDelete(id)
      .then(user => res.json(user))
      .catch(error => res.json(error));
  },
};
