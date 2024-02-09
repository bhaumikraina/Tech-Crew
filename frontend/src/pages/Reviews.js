import React, { useEffect } from 'react';
import axios from 'axios';

import ReviewForm from '../components/form';
import { useReviewContext } from '../context/reviewContext';
import { useAuthContext } from '../hooks/useAuthContext';
import Footer1 from '../components/Footer1';
import Navbar1 from '../components/Navbar1';

const Review = () => {
  const { state: reviewState, dispatch: reviewDispatch } = useReviewContext();
  const { user } = useAuthContext();

  useEffect(() => {
    axios.get('/users/review')
      .then(response => reviewDispatch({ type: 'SET_REVIEWS', payload: response.data }))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [reviewDispatch]);

  const handleAddReview = (newReview) => {
    reviewDispatch({ type: 'ADD_REVIEW', payload: newReview });
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      if (!user) {
        console.error('User not logged in');
        return;
      }
  
      console.log('User ID:', user._id); 
  
      await axios.delete(`/users/review/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
  
      reviewDispatch({ type: 'DELETE_REVIEW', payload: reviewId });
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div className="mt-32">
      <Navbar1 style={{ background: '#333', color: '#fff', padding: '10px' }} />
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Reviews</h1>
        <ReviewForm onAddReview={handleAddReview} />

        {reviewState.loading ? (
          <p className="text-center">Loading reviews...</p>
        ) : (
          <div>
            {reviewState.reviews.map(review => (
              <div key={review._id} className="bg-gray-100 p-6 mb-8 rounded-md shadow-md">
                <p className="text-xl font-bold mb-4">{review.text}</p>
                <p className="text-gray-600 text-lg">User: {review.user}</p>
                <p className="text-gray-600 text-lg">Sentiment: {review.sentiment}</p>
                <p className="text-blue-500 text-lg">Rating: {review.rating}</p>
                {user && user.email === review.email && (
                  <button
                    onClick={() => handleDeleteReview(review._id)}
                    className="text-red-800 mt-4 px-4 py-2 border border-red-800 rounded-md transition duration-300 hover:bg-red-800 hover:text-white"
                  >
                    Delete Review
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer1 />
    </div>
  );
};

export default Review;