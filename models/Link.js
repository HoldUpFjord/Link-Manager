const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema(
	{
		link: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		completed: {
			type: Boolean,
			required: true,
		},
		userId: {
			type: String,
			required: true,
		},
		tags: [String],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Link", LinkSchema);
