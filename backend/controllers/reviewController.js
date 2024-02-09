
const Review = require('../models/reviewModel');

const reviewController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createReview: async (req, res) => {
    const { email,text, user, sentiment,rating } = req.body;

    try {
      const newReview = new Review({ email,text, user, sentiment, rating });
      await newReview.save();
      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },  

  getReviewById: async (req, res) => {
    const { reviewId } = req.params;

    try {
      const review = await Review.findById(reviewId);
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateReview: async (req, res) => {
    const { reviewId } = req.params;
    const { text, sentiment } = req.body;

    try {
      const updatedReview = await Review.findByIdAndUpdate(
        reviewId,
        { text, sentiment },
        { new: true }
      );

      if (!updatedReview) {
        return res.status(404).json({ message: 'Review not found' });
      }

      res.json(updatedReview);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteReview: async (req, res) => {
    const { reviewId } = req.params;

    try {
      const deletedReview = await Review.findByIdAndDelete(reviewId);
      if (!deletedReview) {
        return res.status(404).json({ message: 'Review not found' });
      }
      res.json(deletedReview);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = reviewController;
