const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./routes/home/home.router");
const apiRouter = require("./routes/api/api.router");
const cors = require("cors");
app.use(cors({
	"origin": "https://tranquil-pothos-3a5110.netlify.app/"}));
app.use(express.json());
app.use(express.static("public"));
app.use("/", homeRouter);
app.use("/api", apiRouter);

app.get("/", (req, res) => {
	req.status(200);
	res.sendFile(path.join("public", "index.html"));
});

module.exports = app;
