const Note = require('../models/notes.model');

module.exports = {
  getAll: (req, res) => {
    Note.find()
      .then(notes => res.json(notes))
      .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
  },
  getOne: (req, res) => {
    const id = req.params.id;

    Note.findById(id)
      .then(note => res.json(note))
      .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
  },
  create: (req, res) => {
    const data = req.body;

    Note.create(data)
      .then(note => res.json(note))
      .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
  },
  update: (req, res) => {
    const id = req.params.id;
    const data = req.body;

    Note.findByIdAndUpdate(id, data, {
      useFindAndModify: false,
      new: true,
    })
      .then(note => res.json(note))
      .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
  },
  delete: (req, res) => {
    const id = req.params.id;

    Note.findByIdAndDelete(id)
      .then(note => res.json(note))
      .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
  }
}
