const router = require('express').Router();
const menuController = require('../controllers/menu.controller');
const { permissions } = require('../utils/middlewares');

router.use(permissions(['ADMIN']));
router.route('/').get(menuController.getAll);
router.route('/').post(menuController.create);
router.route('/:id').get(menuController.getOne);
router.route('/:id').put(menuController.update);
router.route('/:id').delete(menuController.delete);

module.exports = router;
