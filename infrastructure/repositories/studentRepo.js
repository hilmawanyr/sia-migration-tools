const studentRepo = require('../../app/contract/studentRepo');
const studentMod = require('../sequelize/model/mahasiswaModel');

module.exports = class extends studentRepo {
    
    async getStudent() {
        try {
            const students =  await studentMod.findAll({
                attributes: [['NIMHSMSMHS','userid']]
            });
            return students;
        } catch (err) {
            throw new Error(err);
        }
    }

}