import { createContext, useReducer, useContext } from 'react';

const initialState = {
  reviews: [],
};

const ReviewContext = createContext();

const reviewReducer = (state, action) => {
  switch (action.type) {
    case 'SET_REVIEWS':
      return { ...state, reviews: action.payload };
    case 'ADD_REVIEW':
      return { ...state, reviews: [...state.reviews, action.payload] };
    case 'UPDATE_REVIEW':
      
      const updateIndex = state.reviews.findIndex(review => review._id === action.payload._id);

      const updatedReviews = [...state.reviews];
      updatedReviews[updateIndex] = action.payload;

      return { ...state, reviews: updatedReviews };
    case 'DELETE_REVIEW':

     const filteredReviews = state.reviews.filter(review => review._id !== action.payload);
     return { ...state, reviews: filteredReviews }; 
    default:
      return state; 
  }
};

const ReviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reviewReducer, initialState);

  return (
    <ReviewContext.Provider value={{ state, dispatch }}>
      {children}
    </ReviewContext.Provider>
  );
};

const useReviewContext = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReviewContext must be used within a ReviewProvider');
  }
  return context;
};

export { ReviewProvider, useReviewContext };