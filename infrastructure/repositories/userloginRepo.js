const Userlogin = require('../../app/contract/userLoginRepo');
const userModel = require('../sequelize/model/userloginModel');

module.exports = class extends Userlogin {

    async storeUser(users) {
        try {
            let persist = await userModel.bulkCreate(users);
            return persist;
        } catch (err) {
            throw new Error(err);
        }
    }

}