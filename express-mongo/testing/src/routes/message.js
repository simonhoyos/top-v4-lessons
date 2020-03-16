const router = require('express').Router();
const messageController = require('../controllers/message.controllers');
const { auth } = require('../utils/middlewares');

router.use(auth)
router.route('/').get(messageController.get);
router.route('/').post(messageController.create);
router.route('/:id').put(messageController.update);
router.route('/:id').delete(messageController.delete);

module.exports = router;
