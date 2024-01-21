const express = require("express");
const {
	get_fav_items,
	add_fav_item,
	delete_item,
} = require("../controllers/AddCartController");

// const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

// router.use(requireAuth);

router.get("/cart", get_fav_items);

router.post("/cart", add_fav_item);

router.delete("/cart", delete_item);

module.exports = router;