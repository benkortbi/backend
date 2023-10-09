const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./routes/home/home.router");
const apiRouter = require("./routes/api/api.router");
const cors = require("cors");
app.use(
	cors({
		origin: "https://notem-fire.onrender.com/",
	})
);
app.use(express.json());
app.use(express.static("public/dist"));

app.get("/", (req, res) => {
	console.log("reached");
	res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
});
// app.use("/", homeRouter);
app.use("/api", apiRouter);

module.exports = app;
