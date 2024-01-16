import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
export default function Accordion1() {
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
    const filterPrice = (type) => {
      setFoods(
        data.filter((item) => {
          return item.type === type;
        })
      );
    };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          data
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}



const data = [
    { name: 'Veg Sweet Corn Soup', type: 'Veg', category: 'Soup', image: '', price:130 },
    { name: 'Veg Hot and Sour Soup', type: 'Veg', category: 'Soup', image: '', price:130 },
    { name: 'NonVeg Hot Corn Soup', type: 'NonVeg', category: 'Soup', image: 'soup_image3.jpg', price:150 },
    { name: 'Tomato Soup', type: 'Veg', category: 'Soup', image: 'soup_image4.jpg', price:140 },
    { name: 'Chicken Noodle Soup', type: 'NonVeg', category: 'Soup', image: 'soup_image5.jpg', price:150 },
    { name: 'Veg Seekh Kebab', type: 'Veg', category: 'Starters', image: 'starter_image1.jpg', price:200  },
    { name: 'Mushroom Tandoori', type: 'Veg', category: 'Starters', image: 'starter_image2.jpg', price:220 },
    { name: 'Hara Bhara Kebab', type: 'Veg', category: 'Starters', image: 'starter_image3.jpg', price:200 },
    { name: 'Corn Tikki', type: 'Veg', category: 'Starters', image: 'starter_image4.jpg', price:230 },
    { name: 'Paneer Cheese Kebab', type: 'Veg', category: 'Starters', image: 'starter_image5.jpg', price:250 },
    { name: 'Paneer Chilli', type: 'Veg', category: 'Starters', image: 'starter_image6.jpg', price:250 },
    { name: 'Veg Manchurian', type: 'Veg', category: 'Starters', image: 'starter_image7.jpg', price:220},
    { name: 'Veg Crispy', type: 'Veg', category: 'Starters', image: 'starter_image8.jpg', price:260 },
    { name: 'Paneer Crispy', type: 'Veg', category: 'Starters', image: 'starter_image9.jpg', price:270 },
    { name: 'Paneer Manchurian', type: 'Veg', category: 'Starters', image: 'starter_image10.jpg', price:270 },
    { name: 'Chicken Lollipop', type: 'NonVeg', category: 'Starters', image: 'starter_image11.jpg', price:280  },
    { name: 'Chicken Crispy', type: 'NonVeg', category: 'Starters', image: 'starter_image12.jpg', price:280  },
    { name: 'Chicken Chilli', type: 'NonVeg', category: 'Starters', image: 'starter_image13.jpg', price:280  },
    { name: 'Chicken Pahadi Tikka', type: 'NonVeg', category: 'Starters', image: 'starter_image14.jpg', price:270  },
    { name: 'Chicken Tandoori', type: 'NonVeg', category: 'Starters', image: 'starter_image15.jpg', price:300  },
    { name: 'Chicken Tikki', type: 'NonVeg', category: 'Starters', image: 'starter_image16.jpg', price:280  },
    { name: 'Chicken 65', type: 'NonVeg', category: 'Starters', image: 'starter_image17.jpg', price:280  },
    { name: 'Egg Chilli Dry', type: 'NonVeg', category: 'Starters', image: 'starter_image18.jpg', price:250 },
    { name: 'Veg Kolhapuri', type: 'Veg', category: 'Main Course', image: 'main_course_image1.jpg', price:300  },
    { name: 'Veg Kofta', type: 'Veg', category: 'Main Course', image: 'main_course_image2.jpg', price:310  },
    { name: 'Veg Kabab Masala', type: 'Veg', category: 'Main Course', image: 'main_course_image3.jpg', price:300  },
    { name: 'Veg Makhanwala', type: 'Veg', category: 'Main Course', image: 'main_course_image4.jpg', price:320  },
    { name: 'Dal Fry', type: 'Veg', category: 'Main Course', image: 'main_course_image5.jpg', price:200 },
    { name: 'Dal Tadka', type: 'Veg', category: 'Main Course', image: 'main_course_image6.jpg', price:220 },
    { name: 'Dal Masala', type: 'Veg', category: 'Main Course', image: 'main_course_image7.jpg', price:220 },
    { name: 'Dal Makhani', type: 'Veg', category: 'Main Course', image: 'main_course_image8.jpg', price:220  },
    { name: 'Paneer Tikka Masala', type: 'Veg', category: 'Main Course', image: 'main_course_image9.jpg', price:340  },
    { name: 'Veg Manchurian', type: 'Veg', category: 'Main Course', image: 'main_course_image10.jpg', price:300 },
    { name: 'Paneer Chilli Gravy', type: 'Veg', category: 'Main Course', image: 'main_course_image11.jpg', price:320 },
    { name: 'Egg Bhurji', type: 'NonVeg', category: 'Main Course', image: 'main_course_image12.jpg', price:180 },
    { name: 'Chicken Chilli', type: 'NonVeg', category: 'Main Course', image: 'main_course_image13.jpg', price:370  },
    { name: 'Chicken Manchurian Gravy', type: 'NonVeg', category: 'Main Course', image: 'main_course_image14.jpg', price:370 },
    { name: 'Butter Chicken', type: 'NonVeg', category: 'Main Course', image: 'main_course_image15.jpg', price:400},
    { name: 'Chicken Tikka Masala', type: 'NonVeg', category: 'Main Course', image: 'main_course_image16.jpg', price:410 },
    { name: 'Egg Chilli', type: 'NonVeg', category: 'Main Course', image: '', price:290 },
    { name: 'Chicken Kolhapuri', type: 'NonVeg', category: 'Main Course', image: '', price:395},
    { name: 'Prawns Masala', type: 'NonVeg', category: 'Main Course', image: '', price:390},
    { name: 'Prawns Curry', type: 'NonVeg', category: 'Main Course', image: '', price:400},
    { name: 'Pomfret Tawa Fry', type: 'NonVeg', category: 'Main Course', image: '', price:410 },
    { name: 'Roti', type: 'Veg', category: 'Breads', image: '', price:30},
    { name: 'Butter Roti', type: 'Veg', category: 'Breads', image: '', price:40},
    { name: 'Atta Roti', type: 'Veg', category: 'Breads', image: '', price:20},
    { name: 'Naan', type: 'Veg', category: 'Breads', image: '', price:40 },
    { name: 'Butter Naan', type: 'Veg', category: 'Breads', image: '', price:50},
    { name: 'Cheese Garlic Naan', type: 'Veg', category: 'Breads', image: '', price:60},
    { name: 'Butter Kulcha', type: 'Veg', category: 'Breads', image: '', price:70},
    { name: 'Steamed Rice', type: 'Veg', category: 'Rice', image: '', price:150 },
    { name: 'Veg Pulao', type: 'Veg', category: 'Rice', image: '', price:260},
    { name: 'Paneer Pulao', type: 'Veg', category: 'Rice', image: '', price:270},
    { name: 'Veg Biryani', type: 'Veg', category: 'Rice', image: '', price:300},
    { name: 'Veg Fried Rice', type: 'Veg', category: 'Rice', image: '', price:280 },
    { name: 'Veg Schezwan Fried Rice', type: 'Veg', category: 'Rice', image: '', price:290},
    { name: 'Chicken Fried Rice', type: 'NonVeg', category: 'Rice', image: '', price:300},
    { name: 'Chicken Schezwan Fried Rice', type: 'NonVeg', category: 'Rice', image: '', price:320},
    { name: 'Hyderabadi Biryani', type: 'NonVeg', category: 'Rice', image: '', price:350 },
    { name: 'Egg Fried Rice', type: 'NonVeg', category: 'Rice', image: '', price:270},
    { name: 'Prawns Biryani', type: 'NonVeg', category: 'Rice', image: '', price:340},
    { name: 'NewYork Cheesecake', type: 'Veg', category: 'Desserts and Drinks', image: '', price:170},
    { name: 'Blueberry Cheesecake', type: 'Veg', category: 'Desserts and Drinks', image: '', price:160},
    { name: 'Strawberry Cheesecake', type: 'Veg', category: 'Desserts and Drinks', image: '', price:150},
    { name: 'Choco Lava cake', type: 'Veg', category: 'Desserts and Drinks', image: '', price:120},
    { name: 'Tiramisu', type: 'Veg', category: 'Desserts and Drinks', image: '', price:80},
    { name: 'ClassNameclassNameic Mint Mojito', type: 'Veg', category: 'Desserts and Drinks', image: '', price:200},
    { name: 'Virgin Mojito', type: 'Veg', category: 'Desserts and Drinks', image: '', price:190},
  
    
    
  ];
  