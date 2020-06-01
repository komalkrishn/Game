var User = require("./models/user");

var fs = require("fs"),
	filename = process.argv[2];
fs.readFile("./names.txt", "utf8", function (err, data) {
	if (err) throw err;
	console.log("OK: " + filename);
	console.log(data, typeof data);
	var lines = data.split("\n");
	console.log(lines);
	lines.forEach((elem) => {
		User.create({
			firstName: elem.split(" ")[0],
			gender: "",
		})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				//console.log("err: handling duplicate", err)
			});
	});
});
