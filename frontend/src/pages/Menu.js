
import React from 'react'
import { useState } from 'react';

import Footer1 from '../components/Footer1'
export default function Menu() {
//backend fetch
  // const [item, setItem] = useState();
	// const [cart, setCart] = useState([]);

  // const addToCart = () => {
	// 	if (!user) {
	// 		window.location.href = "/login";
	// 		return;
	// 	}
	// 	setCart(cart.push(item));
	// 	console.log(item);

	// 	fetch("/user/favorites", {
	// 		method: "POST",
	// 		body: JSON.stringify(item),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			Authorization: `Bearer ${user.token}`,
	// 		},
	// 	}).then((e) => {
	// 		console.log(e);
	// 	});
	// };

//frontend
 const [foods, setFoods] = useState(data);

  //   Filter Type maincourse/deserts
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by type veg/nonVeg  
  const filterType1 = (type) => {
    setFoods(
      foods.filter((item) => {
        return item.type === type 
        

      })
    );
  };

  return (
    <div className='mt-40 '>
      <div>
 <h1 className='text-purple-600 font-bold text-4xl text-center'>
      Menu
    </h1></div>
 < div>
          {/* Filter Row */}
          <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
         
          <div className='flex justfiy-between '>
            <button
              onClick={() => setFoods(data)}
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
          
          </div>
        </div>
      
      
  
    
</div>
     <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
        {foods.map((item, index) => (
          <div
            key={index}
            className='h-full border shadow-lg rounded-lg hover:scale-105 duration-300 '
          > 
          
            <div className='h-60  rounded-t-xl bg-blue-100 flex justify-center items-center'>
    <img src={item.image} alt="" className='h-full w-full '/>
    </div>
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                {/* Backend {Onclick} */}
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Add  
                </button>
              </p>
            </div>
            <span className='font-bold'> Price: Rs.{item.price}</span>
          </div>
        ))}
        
      </div>

</div>
<Footer1/>
</div>

  
  )
}
const data = [
  { name: 'Veg Sweet Corn Soup', type: 'Veg', category: 'Soup', image: 'https://images.unsplash.com/photo-1510431198580-7727c9fa1e3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmVnJTIwU3dlZXQlMjBDb3JuJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D', price:130 },
  { name: 'Veg Hot and Sour Soup', type: 'Veg', category: 'Soup', image: 'https://media.istockphoto.com/id/1151976678/photo/vegetable-soup-minestrone.jpg?s=612x612&w=0&k=20&c=arOR7uYvtZFlBtD0BYT8pahFGzHtKkhdzCqcoIQ6xqw=', price:130 },
  { name: 'NonVeg Hot Corn Soup', type: 'NonVeg', category: 'Soup', image: 'https://media.istockphoto.com/id/1442171151/photo/corn-soup.jpg?s=2048x2048&w=is&k=20&c=m3gNLjaWIgYTouBAdW5IGiQb89aghUH6NMsfX9HRgGo=', price:150 },
  { name: 'Tomato Soup', type: 'Veg', category: 'Soup', image: 'https://media.istockphoto.com/id/1337466397/photo/a-bowl-of-traditional-spain-tomato-soup-with-cream-and-basil-on-the-table-vertical-photo.jpg?s=612x612&w=0&k=20&c=CFdYwWn1kRPyIgEPcJKkktjPFNKQVV9VyGEJY-lGbgI=', price:140 },
  { name: 'Chicken Noodle Soup', type: 'NonVeg', category: 'Soup', image: 'https://media.istockphoto.com/id/1141321755/photo/chicken-noodle-soup.jpg?s=612x612&w=0&k=20&c=EOClF0-SANGQDK0Hw8jH1t_fGQcvOC2hQUC0YLmoUEI=', price:150 },
  { name: 'Veg Seekh Kebab', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/980152380/photo/veg-seekh-kabab-served-with-green-salad-and-chutney.jpg?s=2048x2048&w=is&k=20&c=6lEezmKyJk80j4jMMtBzOO8QvMl3UZf4rbM9sM2Wrjg=', price:200  },
  { name: 'Mushroom Tandoori', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/1389160681/photo/chilli-mushroom-indian-snack-food.jpg?s=2048x2048&w=is&k=20&c=XKJ2rCrF8-I5GeAGMAX1I_p5Mt00uR7-Z8j3AXnbBCw=', price:220 },
  { name: 'Hara Bhara Kebab', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/1024552406/photo/hara-bhara-kabab-or-kebab-is-indian-vegetarian-snack-recipe-served-with-green-mint-chutney.jpg?s=2048x2048&w=is&k=20&c=2BUubsXWErL4HMI7Wq2FdWA1PtRymIZ7-QvAwji6MXU=', price:200 },
  { name: 'Corn Tikki', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/1174614327/photo/corn-tikki-or-pakora-pakoda.jpg?s=2048x2048&w=is&k=20&c=TjxQYXl00XNUUTwwB5uUEo4hmZ6UO7kX9TIxxff5Rms=', price:230 },
  { name: 'Paneer Cheese Kebab', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/942175520/photo/grilled-paneer-tikka-cheese-kebab.jpg?s=2048x2048&w=is&k=20&c=lPdTwG_Xx0Ba78Z1rsKcWohzUNLDxdwvkGj71tpwqA0=', price:250 },
  { name: 'Paneer Chilli', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/697305466/photo/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-served-in-white-dish-with.jpg?s=2048x2048&w=is&k=20&c=I7TgaAW2y2qtCtFTZvpTwU-wWnBH-YfkH-E2MGVLSgU=', price:250 },
  { name: 'Veg Manchurian', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/1208083887/photo/freshly-prepared-veg-manchurian-with-a-bowl-of-fried-rice.jpg?s=612x612&w=0&k=20&c=nTtgKk-SSQAh1E0Pz8SnpGjqMRSIIXM6XiDHIsd5LDQ=', price:220},
  { name: 'Veg Crispy', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/1279283117/photo/veg-pakora-in-gray-bowl-on-concrete-table-top-pakoda-is-indian-cuisine-appetizer-deep-fried.jpg?s=2048x2048&w=is&k=20&c=DsUgt5QIOgJON-YXxe7z07eVciKqST2-kPkVDojwP5o=', price:260 },
  { name: 'Paneer Crispy', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/1308452271/photo/fried-tofu-with-sesame-seeds-and-green-onion.jpg?s=2048x2048&w=is&k=20&c=nCnCSUXrzSABJ_-wcANAvodI-oNKuMUr0RnUH7z4hGU=', price:270 },
  { name: 'Paneer Manchurian', type: 'Veg', category: 'Starters', image: 'https://media.istockphoto.com/id/1292629925/photo/paneer-manchurian-is-indo-chinese-cuisine-dish-paneer-cubes-tossed-with-tomatoes-onions.jpg?s=2048x2048&w=is&k=20&c=7ESfneUELvNehrGN84omK_Y8KS1HMPsGTQQIy_aSgoY=', price:270 },
  { name: 'Chicken Lollipop', type: 'NonVeg', category: 'Starters', image: 'https://media.istockphoto.com/id/1035715556/photo/chicken-drumsticks-in-barbecue-sauce.jpg?s=612x612&w=0&k=20&c=ZAJmAaLLuCLVDvwU4f5Qduje3B6CllMkJF_39Pu2xIM=', price:280  },
  { name: 'Chicken Crispy', type: 'NonVeg', category: 'Starters', image: 'https://media.istockphoto.com/id/1297771706/photo/plate-of-delectable-golden-brown-crispy-fried-chickens-on-wooden-background.jpg?s=612x612&w=0&k=20&c=7Z5Shac-WD7uIAIeplTW_Rzb_wD0snwfFXyflVBO9eI=', price:280  },
  { name: 'Chicken Chilli', type: 'NonVeg', category: 'Starters', image: 'https://media.istockphoto.com/id/1072951288/photo/indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-selective-focus.jpg?s=612x612&w=0&k=20&c=WkAg8lRGsRa4XLt90XdPKIdo5qGe_SfnGzqrNi8sp9g=', price:280  },
  { name: 'Chicken Pahadi Tikka', type: 'NonVeg', category: 'Starters', image: 'https://images.pexels.com/photos/12312104/pexels-photo-12312104.jpeg?cs=srgb&dl=pexels-pixie-pannier-12312104.jpg&fm=jpg&_gl=1*1svr3c*_ga*MzgzMDA1NDA4LjE3MDUwNzUxOTE.*_ga_8JE65Q40S6*MTcwNTA3NTE5MS4xLjEuMTcwNTA3NTI1My4wLjAuMA..', price:270  },
  { name: 'Chicken Tandoori', type: 'NonVeg', category: 'Starters', image: 'https://media.istockphoto.com/id/1363311536/photo/tandoori-chicken.jpg?s=612x612&w=0&k=20&c=h8sNMzT9SsJzFL8fxkw2icHEneneGsKXdyPckOvEzsk=', price:300  },
  { name: 'Chicken Tikki', type: 'NonVeg', category: 'Starters', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWmSal1nGNMDaPS35zKR0HQD2XdWpoibyaA&usqp=CAU', price:280  },
  { name: 'Chicken 65', type: 'NonVeg', category: 'Starters', image: 'https://media.istockphoto.com/id/1306000044/photo/deep-fired-chicken-known-as-chicken-65-in-south-india-spicy-fried-chicken-with-relish.jpg?s=612x612&w=0&k=20&c=B6FeXu9q6_iJ5IQEUD4LVEVK9FeZib5w5oucpWJZUWY=', price:280  },
  { name: 'Egg Chilli Dry', type: 'NonVeg', category: 'Starters', image: 'https://media.istockphoto.com/id/1254339354/photo/masala-anda-fry-made-using-chicken-egg-is-an-indian-starter.jpg?s=612x612&w=0&k=20&c=Z_4Xk4caa8IFwrHtMzaLocTxC2mGsvjS-Z2FIKnwCs4=', price:250 },
  { name: 'Veg Kolhapuri', type: 'Veg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1278584356/photo/veg-kolhapuri-in-black-bowl-on-dark-slate-table-top-indian-vegetable-curry-dish-vegetarian.jpg?s=612x612&w=0&k=20&c=PZ4axFFJWb4ZOF3DWM59pz10PT89OgtXCll_9z9Waus=', price:300  },
  { name: 'Veg Kofta', type: 'Veg', category: 'Main Course', image: 'https://media.istockphoto.com/id/510015500/photo/indian-food-specialties-indian-dish-malai-kofta-or-veg-kofta.jpg?s=612x612&w=0&k=20&c=6sB6EeEWbccw26nQm2_ndeWWk-u-_se9QQ2g4CdWy2E=', price:310  },
  { name: 'Veg Kabab Masala', type: 'Veg', category: 'Main Course', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vJ8MqkLhOWPDk-tlrhlkIcDnnKHSlyPkzQ&usqp=CAU', price:300  },
  { name: 'Veg Makhanwala', type: 'Veg', category: 'Main Course', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkOGdpWjB0FPM6Ax9GfMNpGbeCGzCvq3N8w&usqp=CAU', price:320  },
  { name: 'Dal Fry', type: 'Veg', category: 'Main Course', image: 'https://media.istockphoto.com/id/585796696/photo/yellow-lentil-soup-or-arhar-daal.jpg?s=612x612&w=0&k=20&c=xtXF_Xfpxfey6T4DB6vGYXgk8yNpD_zBgitTrIf3nfc=', price:200 },
  { name: 'Dal Tadka', type: 'Veg', category: 'Main Course', image: 'https://media.istockphoto.com/id/495455544/photo/red-lentil-indian-soup-with-flat-bread-masoor-dal.jpg?s=612x612&w=0&k=20&c=9fFtTaToOQlA5MksySTcwj1imV-Siz6zSwX4CW1NBQg=', price:220 },
  { name: 'Dal Masala', type: 'Veg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1130228942/photo/indian-dal-traditional-indian-soup-lentils-indian-dhal-spicy-curry-in-bowl-spices-herbs.jpg?s=612x612&w=0&k=20&c=ciPGZR4hkLeUL-nRxY4iAh539zYLgUkNz82GG_nJG5A=', price:220 },
  { name: 'Dal Makhani', type: 'Veg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1170374719/photo/dal-makhani-at-dark-background.jpg?s=612x612&w=0&k=20&c=49yLaUAE2apakVk2AAiRQimZd98WtSjIQ0hzCzWsmns=', price:220  },
  { name: 'Paneer Tikka Masala', type: 'Veg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1292629539/photo/paneer-tikka-masala-is-a-famous-indian-dish-served-over-a-rustic-wooden-background-selective.jpg?s=612x612&w=0&k=20&c=GCvoJ3lBcvvRJmeENmSpa_7rLkh_1OKPaM6gKNYqUGM=', price:340  },
  { name: 'Veg Manchurian', type: 'Veg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1251727218/photo/veg-manchurian-with-dry-popular-food-of-india-made-of-cauliflower.jpg?s=612x612&w=0&k=20&c=njfXnI70iKTpSzaW6tg-Jn_ZgpO8kciXkZO8Q9W7fGY=', price:300 },
  { name: 'Paneer Chilli Gravy', type: 'Veg', category: 'Main Course', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQji7aCKp2uzEwp3rMatbrfv-KV3WJTzfBgGA&usqp=CAU', price:320 },
  { name: 'Egg Bhurji', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/545271318/photo/egg-anda-bhurji-or-spicy-scrambled-eggs-and-bread.jpg?s=612x612&w=0&k=20&c=ZRkXYoM69elzanBV5dIODXgEokOQ_oMt7bDXq8jaD-E=', price:180 },
  { name: 'Chicken Chilli', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/901083158/photo/hot-and-spicy-chinese-chicken-dish.jpg?s=612x612&w=0&k=20&c=ZfLtDBl4dDGMCA0p3Cmadg7IZdaHn_sjo6F1ozzAkCI=', price:370  },
  { name: 'Chicken Manchurian Gravy', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1497707535/photo/veg-manchurian-in-a-bowl-closeup-image.jpg?s=2048x2048&w=is&k=20&c=0SBLVVIrlXSgJyJEnvj0fiiqeelMnApAo_7G6jOZfb4=', price:370 },
  { name: 'Butter Chicken', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/673858790/photo/butter-chicken-curry-with-tender-chicken-breast-cream-butter-honey.jpg?s=612x612&w=0&k=20&c=c_9bYsi6T3vnCz5_iYqdZViX3iPV4r3fL2oTGSps8W8=', price:400},
  { name: 'Chicken Tikka Masala', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1286704566/photo/image-of-turquoise-blue-cooking-pan-filled-with-butter-chicken-tikka-curry-large-chunks-of.jpg?s=612x612&w=0&k=20&c=OLP7dEK6tyVtaUZAGC9SYftn9JOanU7IibSRs_F37DA=', price:410 },
  { name: 'Egg Chilli', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1254339354/photo/masala-anda-fry-made-using-chicken-egg-is-an-indian-starter.jpg?s=612x612&w=0&k=20&c=Z_4Xk4caa8IFwrHtMzaLocTxC2mGsvjS-Z2FIKnwCs4=', price:290 },
  { name: 'Chicken Kolhapuri', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/666863808/photo/kolhapuri-or-bombay-chicken-curry-indian-food.jpg?s=612x612&w=0&k=20&c=BsYGoHO4FapAS3Qs55E3wHg_kOQS1B5261D3ap3Qtz4=', price:395},
  { name: 'Prawns Masala', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/482470253/photo/curry-shrimp.jpg?s=612x612&w=0&k=20&c=W0xMswilB-239imqrxA5u3ksSNS0uy76xVUeMYZigys=', price:390},
  { name: 'Prawns Curry', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1003411832/photo/creamy-shrimp-curry.jpg?s=612x612&w=0&k=20&c=ddGesjoq0GAQ8vZk0flPFZfAEIV7_V7Fgwx24EBH0rA=', price:400},
  { name: 'Pomfret Tawa Fry', type: 'NonVeg', category: 'Main Course', image: 'https://media.istockphoto.com/id/1292615342/photo/pomfret-fish-tawa-fry-garnished-with-lemon-and-onion-in-a-white-ceramic-plate-with-wooden.jpg?s=612x612&w=0&k=20&c=QK7JnrDXMFB_eMqttQ4ghQrz3LAnc9KaJYg52Gtc81Q=', price:410 },
  { name: 'Roti', type: 'Veg', category: 'Breads', image: 'https://media.istockphoto.com/id/1126849659/photo/chapati-tava-roti-also-known-as-indian-bread-or-fulka-phulka-main-ingredient-of-lunch-dinner.jpg?s=612x612&w=0&k=20&c=Ils1PF94pnInHpu6sf7g_78AmNmKcwjbv3oeVqVtaW0=', price:30},
  { name: 'Butter Roti', type: 'Veg', category: 'Breads', image: 'https://media.istockphoto.com/id/1292639043/photo/butter-roti-isolated-over-a-rustic-wooden-background-selective-focus.jpg?s=612x612&w=0&k=20&c=tm9YjtCD8ryeaV9whhx9nmU6rPm1Bf-NKl175QP86TA=', price:40},
  { name: 'Atta Roti', type: 'Veg', category: 'Breads', image: 'https://media.istockphoto.com/id/1264121927/photo/bell-pepper-sausage-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=khfLcPIPd1fks0N-P9pVXxoNt7AwKIbvlK7C2qxp_bU=', price:20},
  { name: 'Naan', type: 'Veg', category: 'Breads', image: 'https://media.istockphoto.com/id/183564340/photo/close-up-photograph-of-a-pile-of-plain-naan-flatbreads.jpg?s=612x612&w=0&k=20&c=mlcv58NxCe8svyVDg27zME9FZbTx9FaUGG0utxWGZVk=', price:40 },
  { name: 'Butter Naan', type: 'Veg', category: 'Breads', image: 'https://media.istockphoto.com/id/1251069947/photo/homemade-butter-naan-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=LLWWMXL-9cLJKd0YphS09WhXXFT4zIqPOMi_LISTOpc=', price:50},
  { name: 'Cheese Garlic Naan', type: 'Veg', category: 'Breads', image: 'https://media.istockphoto.com/id/1443601584/photo/tandoori-green-garlic-naan-or-bread-served-in-basket-isolated-on-table-top-view-of-asian-and.jpg?s=2048x2048&w=is&k=20&c=pPREHxYs2OTuqdECamVBokyuuYQWSvbi-SgFuuRqwM0=', price:60},
  { name: 'Butter Kulcha', type: 'Veg', category: 'Breads', image: 'https://media.istockphoto.com/id/1388250623/photo/indian-tandoori-naan-bread-also-called-amritsari-tanduri-nan-kulcha-bread-cooked-in-hot-oven.jpg?s=612x612&w=0&k=20&c=ud3OA8iH8b_-W7xo5JN68udVLO4XBRsAQsf2M4wGE3k=', price:70},
  { name: 'Steamed Rice', type: 'Veg', category: 'Rice', image: 'https://media.istockphoto.com/id/491090528/photo/cooked-rice.jpg?s=612x612&w=0&k=20&c=WNeDEUEioyyk6FQZQrVMrtFMDVdtbwtK951eZ8q5FNY=', price:150 },
  { name: 'Veg Pulao', type: 'Veg', category: 'Rice', image: 'https://media.istockphoto.com/id/495188382/photo/indian-pulav-vegetable-rice-veg-biryani-basmati-rice.jpg?s=612x612&w=0&k=20&c=KQUBQt3PY-9IF31C0gvjrLFb9jZvp5mmLG6Vcxe1e7Q=', price:260},
  { name: 'Paneer Pulao', type: 'Veg', category: 'Rice', image: 'https://media.istockphoto.com/id/1197995878/photo/vegetarian-paneer-biryani-or-panir-pulav-popular-indian-food.jpg?s=612x612&w=0&k=20&c=9jr8fW9ZHsVrp6c1dIqKTcEfO1tYhpT0AtUau0d1G2Q=', price:270},
  { name: 'Veg Biryani', type: 'Veg', category: 'Rice', image: 'https://media.istockphoto.com/id/1292443973/photo/traditional-hyderabadi-vegetable-veg-dum-biryani-with-mixed-veggies-served-with-mixed-raita.jpg?s=612x612&w=0&k=20&c=QJxPi1I6JbdZP9VF-IpgwFUTW2KP_q7X7IpPepnZZE4=', price:300},
  { name: 'Veg Fried Rice', type: 'Veg', category: 'Rice', image: 'https://media.istockphoto.com/id/1292618430/photo/healthy-and-tasty-veg-fried-rice-made-of-mixed-veggies-served-in-bowl-over-a-rustic-wooden.jpg?s=612x612&w=0&k=20&c=LOYEWRaUB2Wggus5Ye3wNQwdzz6CXCGXRqguvgzQOp4=', price:280 },
  { name: 'Veg Schezwan Fried Rice', type: 'Veg', category: 'Rice', image: 'https://media.istockphoto.com/id/1177812041/photo/veg-schezwan-fried-rice-in-black-bowl-at-dark-slate-background-vegetarian-szechuan-rice-is.jpg?s=2048x2048&w=is&k=20&c=yepm0ElLLvcPX1VsnS7HWlzts9HjMzJx3Aku7Ke7Wg0=', price:290},
  { name: 'Chicken Fried Rice', type: 'NonVeg', category: 'Rice', image: 'https://media.istockphoto.com/id/1397065010/photo/chicken-fried-rice.jpg?s=2048x2048&w=is&k=20&c=ACrx9oCRSXhuIMSrl8BVPEvVtRGaS2SUC9vNromqvGo=', price:300},
  { name: 'Chicken Schezwan Fried Rice', type: 'NonVeg', category: 'Rice', image: 'https://media.istockphoto.com/id/1177812126/photo/schezwan-chicken-fried-rice-in-black-bowl-at-dark-slate-background-szechuan-rice-is-indo.jpg?s=612x612&w=0&k=20&c=GzoLaSUKLE2_OHtvHJ7cFDU4z4z0XWXhdR5y7ffa9Mc=', price:320},
  { name: 'Hyderabadi Biryani', type: 'NonVeg', category: 'Rice', image: 'https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?s=612x612&w=0&k=20&c=9xEw3VOQSz9TP8yQr60L47uExyKF9kogRhQdlghlC00=', price:350 },
  { name: 'Egg Fried Rice', type: 'NonVeg', category: 'Rice', image: 'https://media.istockphoto.com/id/1137615300/photo/egg-fried-rice-with-vegetables-in-a-bowl.jpg?s=612x612&w=0&k=20&c=DGoRMMTL4DO2HDpLsIlDkme0JltXH1EmKEIZNiXf3Oc=', price:270},
  { name: 'Prawns Biryani', type: 'NonVeg', category: 'Rice', image: 'https://media.istockphoto.com/id/494094785/photo/indian-biryani-with-shrimp.jpg?s=612x612&w=0&k=20&c=HPjzvYh2ZH85df_h1MZOKn1p9KZvgEc8IV6kmToRjeU=', price:340},
  { name: 'NewYork Cheesecake', type: 'Veg', category: 'Desserts and Drinks', image: 'https://media.istockphoto.com/id/1167344045/photo/cheesecake-slice-new-york-style-classical-cheese-cake.jpg?s=612x612&w=0&k=20&c=y3eh7cFEefAYxB_5Ow2n1OJZML_PqFOdnB5Z9nvXdgw=', price:170},
  { name: 'Blueberry Cheesecake', type: 'Veg', category: 'Desserts and Drinks', image: 'https://media.istockphoto.com/id/970888776/photo/fresh-berry-cheescake-food-photography-recipe-idea.jpg?s=612x612&w=0&k=20&c=kKDOBmJl9FYNMV_YOqg4O8e8rQNO9JZnAMtZ2lfEFnw=', price:160},
  { name: 'Strawberry Cheesecake', type: 'Veg', category: 'Desserts and Drinks', image: 'https://media.istockphoto.com/id/169968908/photo/strawberry-cheesecake.jpg?s=2048x2048&w=is&k=20&c=MNK4uaZy-779KyfSw_iLuqEDpxRucUPpOxmnb8TFths=', price:150},
  { name: 'Choco Lava cake', type: 'Veg', category: 'Desserts and Drinks', image: 'https://media.istockphoto.com/id/177502848/photo/chocolate-cake-with-ice-cream-isolated.jpg?s=612x612&w=0&k=20&c=T1d_FW2WLfV4LBydrOqWLNc_CYhM6NYkesqZYqg58l4=', price:120},
  { name: 'Tiramisu', type: 'Veg', category: 'Desserts and Drinks', image: 'https://media.istockphoto.com/id/1061450296/photo/portion-of-tiramisu-dessert.jpg?s=612x612&w=0&k=20&c=JyWeXtC9k7a4pGPhJxmedRFiR2WWt6-iYmDFdP6CScc=', price:80},
  { name: 'Mint Mojito', type: 'Veg', category: 'Desserts and Drinks', image: 'https://media.istockphoto.com/id/471447415/photo/close-up-of-mojito-glass-with-lemon-slices-blurred-in-back.jpg?s=612x612&w=0&k=20&c=qBwD2QtwN6p_sIAE6Ren3o5SRnxxqarQvtDhTsbj9Dc=', price:200},
  { name: 'Virgin Mojito', type: 'Veg', category: 'Desserts and Drinks', image: 'https://images.pexels.com/photos/4457151/pexels-photo-4457151.jpeg?auto=compress&cs=tinysrgb&w=600', price:190},
  ];