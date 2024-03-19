const fs = require("fs");
const filepath = `${__dirname}/../data/data.json`;
const data = JSON.parse(fs.readFileSync(filepath));

exports.checkValidProfileID = (req, res, next) => {
	const profileID = req.params.profileID * 1;
	const profileIndex = data.findIndex((profile) => profile.id === profileID);
	if (profileIndex === -1) {
		res.status(404).json({
			status: "error",
			message: "profile not found",
		});
		return;
	}
	next();
};

exports.checkValidTaskID = (req, res, next) => {
	const profileID = req.params.profileID * 1;
	const profileIndex = data.findIndex((profile) => profile.id === profileID);
	const taskID = req.params.id * 1;
	const taskIndex = data[profileIndex].tasks.findIndex(
		(task) => task.id === taskID
	);
	if (taskIndex === -1) {
		res.status(404).json({
			status: "error",
			message: "task not found",
		});
		return;
	}
	next();
};

exports.getAllTasks = (req, res) => {
	const profileID = req.params.profileID * 1;
	const profileIndex = data.findIndex((profile) => profile.id === profileID);
	const tasks = data[profileIndex].tasks;
	res.status(200).json({
		status: "success",
		results: tasks.length,
		data: { tasks },
	});
};

exports.createTask = (req, res) => {
	const profileID = req.params.profileID * 1;
	const profileIndex = data.findIndex((profile) => profile.id === profileID);
	const newTask = req.body;
	if (!("status" in newTask) || !("description" in newTask)) {
		res.status(400).json({
			status: "error",
			message: "incomplete task data",
		});
	} else {
		if (data[profileIndex].tasks.length === 0) newTask.id = 0;
		else
			newTask.id =
				data[profileIndex].tasks[data[profileIndex].tasks.length - 1]
					.id + 1;
		data[profileIndex].tasks.push(newTask);
		fs.writeFile(filepath, JSON.stringify(data), (err) => {
			if (err)
				res.status(500).json({
					status: "error",
					message: "failed to write to file",
				});
			else
				res.status(201).json({
					status: "success",
					results: data[profileIndex].tasks.length,
					data: { newTask },
				});
		});
	}
};

exports.getTaskByID = (req, res) => {
	const profileID = req.params.profileID * 1;
	const profileIndex = data.findIndex((profile) => profile.id === profileID);
	const taskID = req.params.id * 1;
	const taskIndex = data[profileIndex].tasks.findIndex(
		(task) => task.id === taskID
	);
	const taskSearch = data[profileIndex].tasks[taskIndex];
	res.status(200).json({
		status: "success",
		message: "task found",
		data: {
			taskSearch,
		},
	});
};

exports.deleteTask = (req, res) => {
	const profileID = req.params.profileID * 1;
	const profileIndex = data.findIndex((profile) => profile.id === profileID);
	const taskID = req.params.id * 1;
	data[profileIndex].tasks = data[profileIndex].tasks.filter(
		(task) => task.id !== taskID
	);
	fs.writeFile(filepath, JSON.stringify(data), (err) => {
		if (err)
			res.status(500).json({
				status: "error",
				message: "failed to write to file",
			});
		else
			res.status(204).json({
				status: "success",
				message: "task deleted",
				data: null,
			});
	});
};

exports.editTask = (req, res) => {
	const profileID = req.params.profileID * 1;
	const profileIndex = data.findIndex((profile) => profile.id === profileID);
	const taskID = req.params.id * 1;
	const taskIndex = data[profileIndex].tasks.findIndex(
		(task) => task.id === taskID
	);
	if ("description" in req.body)
		data[profileIndex].tasks[taskIndex].description = req.body.description;
	if ("status" in req.body)
		data[profileIndex].tasks[taskIndex].status = req.body.status;
	fs.writeFile(filepath, JSON.stringify(data), (err) => {
		if (err)
			res.status(500).json({
				status: "error",
				message: "failed to write to file",
			});
		else
			res.status(203).json({
				status: "success",
				message: "task edited",
				data: null,
			});
	});
};
