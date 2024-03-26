const express = require("express");
const profileRouter = require("./routes/profileRoutes");
const taskRouter = require("./routes/taskRoutes");

const app = express();

// ROUTES
app.use(express.json());
app.use("/api/profiles", profileRouter);
app.use("/api/profiles", taskRouter);

module.exports = app;
