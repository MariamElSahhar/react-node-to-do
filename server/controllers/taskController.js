const fs = require("fs");

const data = JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`));

exports.getAllTasks = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route not implemented",
	});
};

exports.createTask = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route not implemented",
	});
};

exports.getTaskByID = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route not implemented",
	});
};

exports.deleteTask = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route not implemented",
	});
};

exports.editTask = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route not implemented",
	});
};
