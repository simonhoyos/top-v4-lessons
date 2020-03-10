const router = require('express').Router();
const notesController = require('../controllers/notes.controller');

// const router = express.Router();

// /notes/
router.route('/').get(notesController.getAll);

// /notes/:id
router.route('/:id').get(notesController.getOne);

// /notes
router.route('/').post(notesController.create);

// /notes/:id
router.route('/:id').put(notesController.update);

// /notes/:id
router.route('/:id').delete(notesController.delete);

module.exports = router;
