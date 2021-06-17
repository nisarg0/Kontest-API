const dotenv = require("dotenv");
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

module.exports = {
	port: process.env.PORT || 3000,
	db_username: process.env.DB_USERNAME,
	db_pass: process.env.DB_PASS,
	db_name: process.env.DB_NAME,
};
