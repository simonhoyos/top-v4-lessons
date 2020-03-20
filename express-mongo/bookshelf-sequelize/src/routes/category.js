const router = require('express').Router();
const categoryController = require('../controllers/category.controller');
const bookRouter = require('./book');

router.route('/').get(categoryController.list);
router.route('/').post(categoryController.create);
router.route('/:categoryId').get(categoryController.show);
router.route('/:categoryId').put(categoryController.update);
router.route('/:categoryId').delete(categoryController.delete);
router.use('/:categoryId/books', bookRouter);


module.exports = router;
