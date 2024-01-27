import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart, useDispatchCart } from '../context/FavContext';
import Footer1 from '../components/Footer1';
import Navbar1 from '../components/Navbar1';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  const handleCheckOut = async () => {
    try {
      const response = await fetch("/data/foodData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data,
          order_date: new Date().toDateString()
          
        })
      });

      console.log("JSON RESPONSE:::::", response.status);
      console.log('Food Data:', data);
      if (response.status === 200) {
        dispatch({ type: "DROP" });
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  const totalPrice = data.reduce((total, food) => total + food.price * food.qty, 0);

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
                <th className="py-2">Option</th>
                <th className="py-2">Amount</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr key={index} className="border-t hover:bg-gray-50 transition-all">
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">
                    <img src={food.img} alt={food.name} className="w-12 h-12 object-cover" />
                    {console.log('Image URL:', food.image)}
                  </td>
                  <td className="py-2">{food.name}</td>
                  <td className="py-2">{food.qty}</td>
                  <td className="py-2">{food.size}</td>
                  <td className="py-2">{food.price}</td>
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
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Total Price: {totalPrice}/-</h1>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none"
            onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      </div>
      <Footer1 />
    </div>
    </div>
  );
}