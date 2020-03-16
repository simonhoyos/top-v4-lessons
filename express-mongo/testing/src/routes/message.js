const router = require('express').Router();
const messageController = require('../controllers/message.controllers');


router.route('/').get(messageController.get);
router.route('/').post(messageController.create);
router.route('/:id').put(messageController.update);
router.route('/:id').delete(messageController.delete);

module.exports = router;
