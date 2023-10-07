const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const server = http.createServer(app);

server.listen(3000, async () => {
	try {
		await mongoose.connect(process.env.MONGO_API, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("mongo connected!");
		console.log("listenning on port : 3000");
	} catch (error) {
		console.log(error);
	}
});
