const express = require('express')
const {
	show_all_items,
	show_item_by_id,
	
} = require('../controllers/ItemController')

const router = express.Router()
	
router.get('/showdb', show_all_items)

router.get('/showMenu/:_id', show_item_by_id)




module.exports = router