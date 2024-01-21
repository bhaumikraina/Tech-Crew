const AddCart = require("../models/CartModel");
const Item = require("../models/ItemModel");

module.exports.get_fav_items = async (req, res) => {
	// const user_id = req.user._id;
	const Add_Cart = await AddCart.findById(user_id);
	const fav_items = Add_Cart.items;
	res.json(fav_items);
};

module.exports.add_fav_item = async (req, res) => {
	// const user_id = req.user._id;
	const product_id = req.body._id;
	const product_title = req.body.title;

	const newFavProduct = await Product.find({ title: product_title });
	const fav_id = newFavProduct._id;

	let Add_Cart = await AddCart.findById(user_id);
	let itemIndex = Add_Cart.items.findIndex((p) => p._id == product_id);

	if (itemIndex > -1) {
		let productItem = Add_Cart.items[itemIndex];
		Add_Cart.items[itemIndex] = productItem;
	} else Add_Cart.items.push(req.body);

	Add_Cart = await Add_Cart.save();
};

module.exports.delete_item = async (req, res) => {
	// const user_id = req.user._id;
	const product_id = req.body._id;

	let Add_Cart = await AddCart.findById(user_id);
	let itemIndex = Add_Cart.items.findIndex((p) => p._id == product_id);
	if (itemIndex > -1) {
		let productItem = Add_Cart.items[itemIndex];
		Add_Cart.items.splice(itemIndex, 1);
	}
	cart = await Add_Cart.save();
	return res.status(201).send(Add_Cart);
};