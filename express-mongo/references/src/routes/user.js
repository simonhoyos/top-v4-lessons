const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.route('/').get(userController.getAll);
router.route('/').post(userController.create);
router.route('/:id').get(userController.getOne);
router.route('/:id').put(userController.update);
router.route('/:id').delete(userController.delete);

module.exports = router;
