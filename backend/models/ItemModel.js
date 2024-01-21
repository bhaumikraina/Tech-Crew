const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
	},
	category: {
		type: String,
		required: true,
	},
	image: {
		type: String,
        required:true,
	},
	price: {
		type: Number,
		required: true,
	},
		
},{timestamps:true});

module.exports = mongoose.model("Item", ItemSchema);