const router = require('express').Router();

router.use('/upload_mahasiswa', require('./mahasiswaRoute'));
router.use('/userlogin', require('./userLogin'));

module.exports = router;