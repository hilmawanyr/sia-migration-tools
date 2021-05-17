const mhs = require('../../infrastructure/sequelize/model/mahasiswaModel');
const readXls = require("read-excel-file/node");
const path = require('path');

const upload = async (req, res) => {
	try {
		if (req.file == undefined) {
			return res.status(400).send("Please upload an excel file!");
		}

		let pathx = path.join(__dirname, '../uploads/',  req.file.filename);

		readXls(pathx).then((rows) => {
			// skip header
			rows.shift();

			let students = [];

			rows.forEach((row) => {
				let sts;
				if (row[12].toUpperCase() === 'LULUS') {
					sts = 'L';
				} else if (row[12].toUpperCase() === 'AKTIF') {
					sts = 'A';
				} else if (row[12].toUpperCase() === 'DIKELUARKAN') {
					sts = 'D';
				} else if (row[12].toUpperCase() === 'MENGUNDURKAN DIRI') {
					sts = 'K';
				} else if (row[12].toUpperCase() === 'MUTASI') {
					sts = 'M';
				} else if (row[12].toUpperCase() === 'PUTUS SEKOLAH') {
					sts = 'P';
				} else {
					sts = 'W';
				}

				let student = {
					TGLHRMSMHS: row[0],
					NMMHSMSMHS: row[1],
					KDJEKMSMHS: row[2],
					KDPTIMSMHS: row[4],
					KDPSTMSMHS: row[9],
					NIMHSMSMHS: row[13],
					SMAWLMSMHS: row[14],
					SHIFTMSMHS: 'R',
					STMHSMSMHS: sts,
				};

				students.push(student);
			});

			// res.json({students});

			mhs.bulkCreate(students)
				.then(() => {
					res.status(200).send({
						message: "Uploaded the file successfully: " + req.file.originalname,
					});
				})
				.catch((error) => {
					res.status(500).send({
						message: "Fail to import data into database!",
						error: error,
					});
				});
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			message: "Could not upload the file: " + req.file.originalname,
		});
	}
};

module.exports = upload;