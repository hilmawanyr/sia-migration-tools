const express = require('express');
const app = express();
const { APP_PORT } = require('../config/constant');
const router = require('../../interface/routes');
const bootstrap = require('../config/bootstrap');

app.use(express.urlencoded({ extended: true }));
app.use(router);

module.exports = () => {
    app.listen(APP_PORT, async () => {
        await bootstrap.init();
        console.log(`app running on *:${APP_PORT}`)
    });
};