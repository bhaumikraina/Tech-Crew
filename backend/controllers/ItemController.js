const Item = require("../models/ItemModel");

module.exports.show_all_items = (req, res) => {
	Item.find({})
		.then((items) => res.json(items))
		.catch((e) => console.log(e));
};

module.exports.show_item_by_id = (req, res) => {
	const { _id } = req.params;
	console.log(_id);
	Item.findById(_id)
		.then((items) => res.json(items))
		.catch((e) => console.log(e));
};