const dbconn = require('../sequelize/connection');

module.exports = {
    async init() {
        try {
            await dbconn.sequelize.authenticate();
            console.log('Database connected')
        } catch (err) {
            console.log('Can not connect to database. err: ', err);
        }
    }
}