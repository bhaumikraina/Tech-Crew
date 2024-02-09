import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart, useDispatchCart } from '../context/FavContext';
import Footer1 from '../components/Footer1';
import Navbar1 from '../components/Navbar1';
import { Link} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext'

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  const { user } = useAuthContext();
 
  
  const handleCheckOut = async () => {
    try {
     
    let userEmail=user.email
      const response1=await fetch("/order/orderData",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data,
          email:userEmail,
          order_date: new Date().toDateString()
        })
      })
  
     
      console.log('Food Data:', data);
      
      if ( response1.status===200) {
        dispatch({ type: "DROP" });
       
      } else {
        console.error('Error during checkout: unexpected response status');
       
      }
    } catch (error) {
      console.error('Error during checkout:', error);
     
    }
  };
  const updateQuantity = (index, newQuantity) => {
  
    newQuantity = parseInt(newQuantity, 10);
    
    dispatch({ type: "UPDATE", index, newQuantity });
};

const cartItems = data
  ? data.map((food, index) => {
      const price = parseFloat(food.price);
      const quantity = parseInt(food.qty, 10);
      const amount = isNaN(price) || isNaN(quantity) ? 0 : (price * quantity).toFixed(2);

      console.log('Price:', price);
      console.log('Quantity:', quantity);
      console.log('Amount:', amount);

      return (
        <tr key={index} className="border-t hover:bg-gray-50 transition-all">
          <td className="py-2">{index + 1}</td>
          <td className="py-2">
            <img src={food.img} alt={food.name} className="w-12 h-12 object-cover" />
          </td>
          <td className="py-2">{food.name}</td>
          <td className="py-2">
            <div className="flex items-center">
              <button
                type="button"
                className="px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
                onClick={() => updateQuantity(index, quantity - 1)}
              >
                -
              </button>
              <span className="mx-2">{food.qty}</span>
              <button
                type="button"
                className="px-2 py-1 bg-blue-500 text-white  hover:bg-blue-600 focus:outline-none"
                onClick={() => updateQuantity(index, quantity + 1)}
              >
                +
              </button>
            </div>
          </td>
          <td className="py-2">{food.size}</td>
          <td className="py-2">{amount}</td>
          <td className="py-2">
          <button
                      type="button"
                      className="text-red-500 hover:text-red-700 transition-all focus:outline-none"
                      onClick={() => { dispatch({ type: "REMOVE", index: index }) }}
                    >
                      <DeleteIcon />
                    </button>
          </td>
        </tr>
      );
    })
  : [];

    const totalPrice = data ? data.reduce((total, food) => total + (parseFloat(food.price) * parseFloat(food.qty)), 0) : 0;
    console.log('Total Price in Cart component:', totalPrice);
  return (
    <div>
      <Navbar1 style={{ background: "#333", color: "#fff", padding: "10px" }}/>
    <div className="mt-32 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-md bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">CART</h1>
        <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
            <thead> 
              <tr className="text-left text-gray-700">
                <th className="py-2">#</th>
                <th className="py-2">Image</th>
                <th className="py-2">Name</th>
               
                <th className="py-2">Quantity</th>
                <th className="py-2">Amount</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
            {cartItems}
            </tbody>
            
          </table>
        </div>
        <div className="mt-6 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">
  Total Price: {totalPrice.toFixed(2)} /-
</h1>
          <Link to='/payment'>
   <button
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none"
      onClick={handleCheckOut}
   >
      Check Out
   </button>
</Link>

        </div>
      </div>
     
    </div>
    <Footer1 />
    </div>
  );
}