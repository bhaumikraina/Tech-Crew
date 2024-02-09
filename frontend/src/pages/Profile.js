import React, { useState, useEffect } from 'react';
import Footer1 from '../components/Footer1';
import Navbar1 from '../components/Navbar1';
import axios from 'axios';
import { useReviewContext } from '../context/reviewContext';
import Typography from '@mui/material/Typography';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Profile() {
  const { user } = useAuthContext();
  const { state: reviewState } = useReviewContext();
  const [orderData, setorderData] = useState({});

  const fetchMyOrder = async () => {
    if (user && user.email) {
      try {
        const response = await fetch("/order/myOrder", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: user.email
          })
        });
        const data = await response.json();
        setorderData(data);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    } else {
      console.error('User email is null or undefined');
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div className='mt-32 text-center'>
      <Navbar1 />
      <div className='container mx-auto mt-8'>
        <h1 className='text-3xl font-bold mb-4'>Welcome, {user && user.email}</h1>
      </div>

      <div className='container mx-auto mt-8'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Previous Orders</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {orderData.orderData &&
              orderData.orderData.order_data.map((item) =>
                item.map((arrayData) => (
                  
                  <div key={arrayData.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <img src={arrayData.img} className='w-full h-48 object-cover' alt={arrayData.name} />
                    <div className='px-6 py-4'>
                      <div className='font-bold text-xl mb-2'>{arrayData.name}</div>
                      {arrayData.Order_date && (
                        <p className='text-gray-700 text-xl font-bold mb-2'>
                             Date: {arrayData.Order_date}
                        </p>
                      )}
                      <p className='text-blue-500 text-lg'>₹{arrayData.price}/-</p>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Recent Reviews</h2>
          <div>
            {reviewState.reviews.map((review) => (
              <div key={review._id} className='bg-gray-100 p-6 mb-8 rounded-md shadow-md'>
                {user && user.email === review.email && (
                  <>
                    <p className='text-xl font-bold mb-4'>{review.text}</p>
                    <p className='text-gray-600 text-lg'>User: {review.user}</p>
                    <p className='text-gray-600 text-lg'>Sentiment: {review.sentiment}</p>
                    <p className='text-blue-500 text-lg'>Rating: {review.rating}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}