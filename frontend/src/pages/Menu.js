
import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { useDispatchCart,useCart } from '../context/FavContext';
import { Badge } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useAuthContext } from '../hooks/useAuthContext'

import Footer1 from '../components/Footer1'
import Navbar1 from '../components/Navbar1';
export default function Menu() {
  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [foodType, setFoodType] = useState([]);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]); 
  const [cart,setCart]=useState(false)
  const { user } = useAuthContext();
  const [searchQuery, setSearchQuery] = useState('');

  let dispatch=useDispatchCart()
  let data=useCart()
  const [qty,setQty]=useState(1)
  

  const loadData = async () => {
    try {
      if (!user) {
        window.location.href = "/login";
        return;
      }
      let response = await fetch("/data/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        }
      });
      response = await response.json();
      setFoodItem(response[0] || []);
      setFoodCat(response[1]);
      setFoodType(response[2]);
      setResponse(response);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const resetFilters = () => {
    setFoodItem(response[0] || []);
  };

  const handleAddtoCart = async (selectedItem) => {
    if (!user) {
			window.location.href = "/login";
			return;
		}
    if (selectedItem) {
      await dispatch({
        type: "ADD",
        id: selectedItem._id,
        name: selectedItem.name,
        price: selectedItem.price,
        qty: qty,
        img: selectedItem.image
      });
      console.log(data);
    } else {
      console.error('No food item selected to add to the cart.');
    }
  };


    

  const filterType = (category) => {
    const filteredItems = response[0].filter((item) => item.category === category);
    setFoodItem(filteredItems);
  };

  const filterType1 = (type) => {
    const filteredByCategory = response[0].filter((item) => item.category === foodItem[0]?.category);
    const filteredItems = filteredByCategory.filter((item) => item.type === type);
    setFoodItem(filteredItems);
  };
  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

 
  const filteredItems = foodItem.filter((item) => {
    const itemName = item.name.toLowerCase();                                                                                                                        
    return itemName.includes(searchQuery);
  });




  return (
    
    <div className='mt-32'>
    <Navbar1 className="bg-gray-800 text-white p-4 text-xl" />
    <div>
      <h1 className='text-purple-600 font-bold text-4xl text-center'>
        Menu
      </h1>
      <h3 className='text-center'> <input
              type='text'
              placeholder='Search Menu items...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='p-2 border rounded-md mt-4 w-3/20'
            /></h3>
    </div>
    <div>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <div className='flex justfiy-between flex-wrap lg:flex-nowrap'>
              <button
                onClick={() => resetFilters()}
                className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
              >
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>ALL</span>


              </button>

              <button
                onClick={() => filterType('Soup')}
                className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
              >
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Soup</span>
              </button>


              <button
                onClick={() => filterType('Starters')}
                className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
              >
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Starters</span>
              </button>
              <button
                onClick={() => filterType('Main Course')}
                className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
              >
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Main Course</span>
              </button>
              <button
                onClick={() => filterType('Breads')}
                className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
              >
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Breads</span>
              </button>
              <button
                onClick={() => filterType('Rice')}
                className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
              >
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Rice</span>
              </button>
              <button
                onClick={() => filterType('Desserts and Drinks')}
                className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
              >
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Desserts and Drinks</span>
              </button>
            </div>
          </div>
          <div>

            <div className='flex justify-between max-w-[390px] w-full'>
              <button
                onClick={() => filterType1('Veg')}
                className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
              >
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>Veg</span>
              </button>
              <button
                onClick={() => filterType1('NonVeg')}
                className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
              >
                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>NonVeg</span>
              </button>
              <div>
           
          </div>
              <Link to="/cart" onClick={()=>{setCart(true)}}>
   <Button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium'>
      <HiShoppingCart />
      Cart {" "}
      <Badge pill bg="danger" className="ms-2">
         {data.length}
      </Badge>
   </Button>
</Link>
      {cart? <Cart></Cart> : null}
            </div>
          </div>




        </div>
        {loading ? (
  <p>Loading...</p>
) : (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className='h-full border shadow-lg rounded-lg hover:scale-105 duration-300'
              >
        <div className='h-60 rounded-t-xl bg-blue-100 flex justify-center items-center'>
          <img src={item.image} alt="" className='h-full w-full' />
        </div>
        <div className='flex justify-between px-2 py-4'>
          <p className='font-bold'>{item.name}</p>
          <p>
            <select className="m-2 h-10 w-20 bg-success text-black rounded" onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleAddtoCart(item)}>
              Add
            </button>
            <div className="px-2 py-1">
      <span className='font-bold'>Ratings: {item.ratings}</span>
    </div>
          </p>  
        </div>
        <span className='font-bold'>Price: Rs.{item.price}</span>
        
      </div>
    ))}
  </div>
)}
      </div>
      <Footer1 />
    </div>


  )
}
