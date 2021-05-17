const router = require('express').Router();
const mhsController = require('../controllers/mahasiswaController');
const multer = require('../../infrastructure/middleware/multer');

router.post('/', multer.single('file'), mhsController);

module.exports = router;