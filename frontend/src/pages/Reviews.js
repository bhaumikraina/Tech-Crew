import React, { useEffect } from 'react';
import axios from 'axios';

import ReviewForm from '../components/form';
import { useReviewContext } from '../context/reviewContext';
import { useAuthContext } from '../hooks/useAuthContext'
import Footer1 from '../components/Footer1'
import Navbar1 from '../components/Navbar1';


const Review = () => {
  const { state: reviewState, dispatch: reviewDispatch } = useReviewContext();
  const { user } = useAuthContext();

  useEffect(() => {
    axios.get('/user/review')
      .then(response => reviewDispatch({ type: 'SET_REVIEWS', payload: response.data }))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [reviewDispatch]);

  const handleAddReview = (newReview) => {
    reviewDispatch({ type: 'ADD_REVIEW', payload: newReview });
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      // Assuming you have an authentication token in authState.token
      await axios.delete(`/user/review/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      // Remove the deleted review from the state
      reviewDispatch({ type: 'DELETE_REVIEW', payload: reviewId });
    } catch (error) {
      console.error('Error deleting review:', error);
      // Provide feedback to the user about the error
    }
  };

  return (
    <div className='mt-32 '>
      <Navbar1 style={{ background: "#333", color: "#fff", padding: "10px" }} />
      <div className="container mx-auto my-8">
        <ReviewForm onAddReview={handleAddReview} />

        {reviewState.loading ? (
          <p>Loading reviews...</p>
        ) : (
          <div>
            {reviewState.reviews.map(review => (
              <div key={review._id} className="bg-gray-100 p-4 mb-4">
                <p>{review.text}</p>
                <p className="text-gray-600">User: {review.user}</p>
                <p className="text-blue-500">Rating: {review.rating}</p>
                
                {/* Display delete button only if the current user is the author */}
                {user && user._id === review.user._id && (
                  <button onClick={() => handleDeleteReview(review._id)} className="text-red-500">Delete Review</button>
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