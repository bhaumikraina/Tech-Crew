
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');


router.get('/review', reviewController.getAllReviews);
router.post('/review', reviewController.createReview);  
router.get('/review/:reviewId', reviewController.getReviewById);
router.put('/review/:reviewId', reviewController.updateReview);
router.delete('/review/:reviewId', reviewController.deleteReview);

module.exports = router;
