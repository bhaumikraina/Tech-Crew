import React, { useState } from 'react';
import Footer1 from '../components/Footer1';
import Navbar1 from '../components/Navbar1';



export default function Pay() {
  // State to manage payment details
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [fullName, setFullName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);


  // Function to handle payment submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    // You can use a payment gateway library or make an API call to handle payments
    // Display success or error messages accordingly

    // For demonstration purposes, just show a console log
    console.log(`Payment processed successfully with ${paymentMethod === 'card' ? 'card' : 'UPI'}!`);

    // You can also reset the form and show a confirmation message
    
    setIsCouponApplied(false);
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setFullName('');
    setUpiId('');
  };

  // Function to handle coupon application
  const handleApplyCoupon = () => {
    // Add logic to check and apply the coupon
    // For demonstration purposes, just toggle a state
    setIsCouponApplied(!isCouponApplied);
  };



  return (
    <div className="mt-32">
      <Navbar1 className="bg-gray-800 text-white p-4 text-xl" />

      <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-center text-gray-700 text-xl font-bold">Payment Details</h1>
        
        {/* Payment Method Selection */}
        <div className="flex flex-col mt-4">
          <label className="mb-2 text-gray-600 font-semibold">Select Payment Method:</label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="card"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => setPaymentMethod('card')}
              className="mr-2"
            />
            <label htmlFor="card" className="font-semibold">Pay with Card</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="upi"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => setPaymentMethod('upi')}
              className="mr-2"
            />
            <label htmlFor="upi" className="font-semibold">Pay with UPI</label>
          </div>
        </div>

        {/* Card Payment Fields */}
        {paymentMethod === 'card' && (
          <form onSubmit={handlePaymentSubmit} className="mt-4">
            {/* Card Number */}
            <div className="mb-2">
              <label htmlFor="cardNumber" className="text-gray-600 font-semibold">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter your card number"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Expiry Date */}
            <div className="mb-2">
              <label htmlFor="expiryDate" className="text-gray-600 font-semibold">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* CVV */}
            <div className="mb-2">
              <label htmlFor="cvv" className="text-gray-600 font-semibold">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="Enter CVV"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Full Name */}
            <div className="mb-2">
              <label htmlFor="fullName" className="text-gray-600 font-semibold">Full Name:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Coupon Code */}
            <div className="mb-2">
              <label htmlFor="couponCode" className="text-gray-600 font-semibold">Coupon Code:</label>
              <div className="flex">
                <input
                  type="text"
                  id="couponCode"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-full p-2 border border-gray-300 rounded-md mr-2"
                />
                <button type="button" onClick={handleApplyCoupon} className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-600">
              Pay Now
            </button>
          </form>
        )}

        {/* UPI Payment Fields */}
        {paymentMethod === 'upi' && (
          <form onSubmit={handlePaymentSubmit} className="mt-4">
            {/* UPI ID */}
            <div className="mb-2">
              <label htmlFor="upiId" className="text-gray-600 font-semibold">UPI ID:</label>
              <input
                type="text"
                id="upiId"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter your UPI ID"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Coupon Code */}
            <div className="mb-2">
              <label htmlFor="couponCode" className="text-gray-600 font-semibold">Coupon Code:</label>
              <div className="flex">
                <input
                  type="text"
                  id="couponCode"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-full p-2 border border-gray-300 rounded-md mr-2"
                />
                <button type="button" onClick={handleApplyCoupon} className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Apply Coupon
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-600">
              Pay Now
            </button>
          </form>
        )}

        {/* Coupon and Thanks Messages */}
        {isCouponApplied && <p className="text-green-500">Coupon applied successfully!</p>}
        <p className="text-gray-700">Thanks for using our service!</p>
      </div>

      <Footer1 />
    </div>
  );
}