const multer = require('multer');
const path = require('path');

const filter = (req, file, cb) => {
	if (file.mimetype.includes("excel") || file.mimetype.includes("spreadsheetml")) {
		cb(null, true);
	} else {
		cb("Please upload only excel file.", false);
	}
}

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../uploads/'));
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

const multerd = multer({
	storage: storage,
	fileFilter: filter
});
module.exports = multerd;