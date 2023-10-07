const todo = require("../models/todo.model");

async function getTasks(req, res) {
	try {
		const response = await todo.find();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function getSingleTask(req, res) {
	try {
		const { id } = req.params;
		const response = await todo.findById(id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
}
async function postTask(req, res) {
	try {
		const task = req.body;
		const result = await todo.create(task);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
}
async function updateTask(req, res) {
	try {
		const itemId = req.params.id;
		const updates = req.body;
		const updatedItem = await todo.findByIdAndUpdate(itemId, updates, {
			new: true,
		});

		res.status(200).json(updatedItem);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
}
async function deleteTask(req, res) {
	try {
		const { id } = req.params;
		const deletedId = await todo.findByIdAndDelete(id);
		res.status(200).json({ deletedId, message: "successfully deleted!" });
	} catch (error) {
		res.status(500).json({ message: "failed to delete" });
	}
}

module.exports = {
	getTasks,
	postTask,
	deleteTask,
	getSingleTask,
	updateTask,
};
