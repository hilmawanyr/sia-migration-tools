const lecturer = require('../sequelize/model/lecturerModel');
const LecturerRepo = require('../../app/contract/lecturerRepo');

module.exports = class extends LecturerRepo {

    async getLecturer() {
        try {
            let lecturers = await lecturer.findAll({
                attributes: [['nid','userid']]
            });
            return lecturers
        } catch (err) {
            throw new Error(err);
        }
    }

}