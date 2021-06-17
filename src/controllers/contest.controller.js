exports.contest = (req, res) => {
	res.send("welcome\n");

	// runPy
	// 	.then(function (fromRunpy) {
	// 		console.log(fromRunpy.toString());
	// 		res.end(fromRunpy);
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});
};

// let runPy = new Promise(function (success, nosuccess) {
// 	const { spawn } = require("child_process");
// 	const pyprog = spawn("python", ["./../pypy.py"]);

// 	pyprog.stdout.on("data", function (data) {
// 		success(data);
// 	});

// 	pyprog.stderr.on("data", (data) => {
// 		nosuccess(data);
// 	});
// });
