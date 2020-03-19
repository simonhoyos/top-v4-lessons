const router = require('express').Router();
const menuController = require('../controllers/menu.controller');
const { permissions } = require('../utils/middlewares');

router.route('/').get(permissions(['ADMIN', 'COSTUMER']), menuController.getAll);
router.use(permissions(['ADMIN']));
router.route('/').post(menuController.create);
router.route('/:id').get(menuController.getOne);
router.route('/:id').put(menuController.update);
router.route('/:id').delete(menuController.delete);

module.exports = router;
