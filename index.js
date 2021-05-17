const server = require('./infrastructure/webserver/server');
const dbconn = require('./infrastructure/config/bootstrap');

const start = async () => {
	try {
		await dbconn;
		const startServer = server()
	} catch (err) {
		console.log(`Erreo while start the server. Error: ${err}`);
	}
}

start();