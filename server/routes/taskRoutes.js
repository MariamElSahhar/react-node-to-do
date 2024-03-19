const express = require("express");
const taskController = require(`${__dirname}/../controllers/taskController`);

const router = express.Router();

router
	.route("/:profileID/tasks")
	.get(taskController.checkValidProfileID, taskController.getAllTasks)
	.post(taskController.checkValidProfileID, taskController.createTask);

router
	.route("/:profileID/tasks/:id")
	.get(
		taskController.checkValidProfileID,
		taskController.checkValidTaskID,
		taskController.getTaskByID
	)
	.delete(
		taskController.checkValidProfileID,
		taskController.checkValidTaskID,
		taskController.deleteTask
	)
	.patch(
		taskController.checkValidProfileID,
		taskController.checkValidTaskID,
		taskController.editTask
	);

module.exports = router;
