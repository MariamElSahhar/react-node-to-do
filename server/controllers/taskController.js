const fs = require("fs");
const filepath = `${__dirname}/../data/data.json`;
const data = JSON.parse(fs.readFileSync(filepath));

exports.getAllTasks = (req, res) => {
	const profileID = req.params.profileID * 1;
	const profileIndex = data.findIndex((profile) => profile.id === profileID);
	if (profileIndex === -1) {
		res.status(404).json({
			status: "error",
			message: "profile not found",
		});
	} else {
		const tasks = data[profileIndex].tasks;
		res.status(200).json({
			status: "success",
			results: tasks.length,
			data: { tasks },
		});
	}
};

exports.createTask = (req, res) => {
	const profileID = req.params.profileID * 1;
	const profileIndex = data.findIndex((profile) => profile.id === profileID);
	if (profileIndex === -1) {
		res.status(404).json({
			status: "error",
			message: "profile not found",
		});
	} else {
		const newTask = req.body;
		if (!newTask.description) {
			res.status(400).json({
				status: "error",
				message: "incomplete task data",
			});
		} else {
			data[profileIndex].tasks["todo"].push(newTask.description);
			fs.writeFile(filepath, JSON.stringify(data), (err) => {
				if (err)
					res.status(500).json({
						status: "error",
						message: "failed to write to file",
					});
				else
					res.status(201).json({
						status: "success",
						results: data[profileIndex].tasks["todo"].length,
						data: { newTask },
					});
			});
		}
	}
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
