const express = require("express");
const taskController = require(`${__dirname}/../controllers/taskController`);

const router = express.Router();

router
	.route("/")
	.get(taskController.getAllTasks)
	.post(taskController.createTask);

router
	.route("/:id")
	.get(taskController.getTaskByID)
	.delete(taskController.deleteTask)
	.patch(taskController.editTask);

module.exports = router;
