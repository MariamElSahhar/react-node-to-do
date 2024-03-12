const fs = require("fs");
const filepath = `${__dirname}/../data/data.json`;
const data = JSON.parse(fs.readFileSync(filepath));

exports.getAllProfiles = (req, res) => {
	res.status(200).json({
		status: "success",
		results: data.length,
		data: { data },
	});
};

exports.createProfile = (req, res) => {
	const profileID = data.length;
	const newProfile = Object.assign({ id: profileID }, req.body);
	if (!("name" in newProfile)) newProfile.name = "New Profile";
	data.push(newProfile);
	fs.writeFile(filepath, JSON.stringify(data), (err) => {
		res.status(201).json({
			status: "success",
			message: "profile created",
			data: {
				newProfile,
			},
		});
	});
};

exports.getProfileByID = (req, res) => {
	const profileID = req.params.id * 1;
	const profileSearch = data.find((profile) => profile.id === profileID);
	if (!profileSearch)
		res.status(404).json({
			status: "error",
			message: "profile not found",
		});
	else
		res.status(200).json({
			status: "success",
			message: "profile found",
			data: { profileSearch },
		});
};

exports.deleteProfile = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route not implemented",
	});
};

exports.editProfile = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route not implemented",
	});
};
