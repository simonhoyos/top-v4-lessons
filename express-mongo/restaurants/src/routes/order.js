const router = require('express').Router();
const orderController = require('../controllers/order.controller');
const { permissions } = require('../utils/middlewares');

router.route('/').get(permissions(['ADMIN']), orderController.getAll);
router.route('/').post(permissions(['COSTUMER']), orderController.create);
router.route('/:id').get(permissions(['ADMIN', 'CUSTOMER']), orderController.getOne);
router.route('/:id').put(permissions(['ADMIN']), orderController.update);

module.exports = router;
