const mongoose = require("mongoose");
require("dotenv").config();

var config = require("./index");

const MONGOURI = `mongodb+srv://${config.db_username}:${config.db_pass}@contests.idnuk.mongodb.net/${config.db_name}?retryWrites=true&w=majority`;

const InitiateMongoServer = async () => {
	console.log(MONGOURI);
	try {
		await mongoose.connect(MONGOURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to DB !!");
	} catch (e) {
		console.log(e);
		throw e;
	}
};

module.exports = InitiateMongoServer;
