const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddCart = new Schema({
	user_id: {
		type: String,
	},
	items: [],
});

module.exports = mongoose.model("AddCart", AddCart);