const express = require("express");
const profileController = require(`${__dirname}/../controllers/profileController`);

const router = express.Router();

router
	.route("/")
	.get(profileController.getAllProfiles)
	.post(profileController.createProfile);

router
	.route("/:id")
	.get(profileController.validProfileID, profileController.getProfileByID)
	.delete(profileController.validProfileID, profileController.deleteProfile)
	.patch(profileController.validProfileID, profileController.editProfile);

module.exports = router;
