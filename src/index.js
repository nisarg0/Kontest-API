// https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const InitiateMongoServer = require("./config/db");
var config = require("./config/index");

InitiateMongoServer();
app = express();

// adding Helmet to enhance your API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.use("/", require("./routes/contest.route"));

app.listen(config.port, () => {
	console.log(`Listening at port ${config.port}`);
});
