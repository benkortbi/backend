const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		deadLine: {
			type: String,
			required: false,
		},
		color: {
			type: String,
			required: true,
		},
		badgeType: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const todo = mongoose.model("todo_tasks", todoSchema, "todo_tasks");

module.exports = todo;
