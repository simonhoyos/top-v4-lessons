const router = require('express').Router();
const plateController = require('../controllers/plate.controller');

router.route('/').get(plateController.getAll);
router.route('/').post(plateController.create);
router.route('/:id').get(plateController.getOne);
router.route('/:id').put(plateController.update);
router.route('/:id').delete(plateController.delete);

module.exports = router;
