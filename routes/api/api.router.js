const express = require("express");
const {
	getTasks,
	postTask,
	deleteTask,
	getSingleTask,
	updateTask,
} = require("../../controllers/tasks.controller");

const apiRouter = express.Router();
apiRouter.get("/", (_, res) => {
	const express = require("express");
	const {
		getTasks,
		postTask,
		deleteTask,
		getSingleTask,
		updateTask,
	} = require("../../controllers/tasks.controller");

	const apiRouter = express.Router();

	apiRouter.get("/tasks", getTasks);
	apiRouter.get("/tasks/:id", getSingleTask);
	apiRouter.post("/new-task", postTask);
	apiRouter.delete("/tasks/:id", deleteTask);
	apiRouter.patch("/tasks/:id", updateTask);

	module.exports = apiRouter;
});
apiRouter.get("/tasks", getTasks);
apiRouter.get("/tasks/:id", getSingleTask);
apiRouter.post("/new-task", postTask);
apiRouter.delete("/tasks/:id", deleteTask);
apiRouter.patch("/tasks/:id", updateTask);

module.exports = apiRouter;
