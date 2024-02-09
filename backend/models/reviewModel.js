const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  text: { type: String, required: true },
  user: { type: String, required: true },
  sentiment: { type: String, enum: ['positive', 'neutral', 'negative'], required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;