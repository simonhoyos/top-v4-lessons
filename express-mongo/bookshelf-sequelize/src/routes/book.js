const router = require('express').Router({ mergeParams: true });
const bookController = require('../controllers/book.controller');

router.route('/').get(bookController.list);
router.route('/').post(bookController.create);
router.route('/:bookId').get(bookController.show);
router.route('/:bookId').put(bookController.update);
router.route('/:bookId').delete(bookController.delete);

module.exports = router;
