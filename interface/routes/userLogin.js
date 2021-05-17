const router = require('express').Router();
const userCtrl = require('../controllers/createUser');

router.get('/students', userCtrl.createStudentUser);
router.get('/lecturers', userCtrl.createLecturerUser);

module.exports = router;