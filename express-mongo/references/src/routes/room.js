const router = require('express').Router();
const roomController = require('../controllers/room.controller');

router.route('/').get(roomController.getAll);
router.route('/').post(roomController.create);
router.route('/:id').get(roomController.getOne);
router.route('/:id').put(roomController.update);
router.route('/:id').delete(roomController.delete);

module.exports = router;
