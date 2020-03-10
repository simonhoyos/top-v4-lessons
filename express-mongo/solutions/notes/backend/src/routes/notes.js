const router = require('express').Router();
const notesController = require('../controllers/notes.controller');

// const router = express.Router();

// /notes/
// router.route('/').get((req, res) => {
//   Note.find()
//     .then(notes => res.json(notes))
//     .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
// });

// /notes/:id
router.route('/:id').get((req, res) => {
  const id = req.params.id;

  Note.findById(id)
    .then(note => res.json(note))
    .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
});

// /notes
// router.route('/').post((req, res) => {
//   const data = req.body;

//   Note.create(data)
//     .then(note => res.json(note))
//     .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
// });

// /notes/:id
// router.route('/:id').put((req, res) => {
//   const id = req.params.id;
//   const data = req.body;

//   Note.findByIdAndUpdate(id, data)
//     .then(note => res.json(note))
//     .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
// });

// /notes/:id
// router.route('/:id').delete((req, res) => {
//   const id = req.params.id;

//   Note.findByIdAndDelete(id)
//     .then(note => res.json(note))
//     .catch(err => res.status(400).json({ message: 'Something went wrong!' }));
// });

module.export = router;
