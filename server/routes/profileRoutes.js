const express = require("express");
const profileController = require(`${__dirname}/../controllers/profileController`);

const router = express.Router();

router
	.route("/")
	.get(profileController.getAllProfiles)
	.post(profileController.createProfile);

router
	.route("/:id")
	.get(profileController.getProfileByID)
	.delete(profileController.deleteProfile)
	.patch(profileController.editProfile);

module.exports = router;
