const router = require('express').Router();
const messageController = require('../controllers/message.controller');

router.route('/').get(messageController.getAll);
router.route('/').post(messageController.create);
router.route('/:id').get(messageController.getOne);
router.route('/:id').put(messageController.update);
router.route('/:id').delete(messageController.delete);

module.exports = router;
