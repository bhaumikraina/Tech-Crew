import React from 'react'
import img from "./../images/Bg.jpg"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer1 from '../components/Footer1'
import Navbar1 from '../components/Navbar1';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(77, 77, 77)" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(77, 77, 77)" }}
      onClick={onClick}
    />
  );
}

export default function Home() {

  const settings = {
    dots: false,
    infinite: true  ,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  
  }


  
  return (
    <div>
    <Navbar1 className="bg-gray-800 text-white p-4 text-xl" />
    <div className='mt-20'>
      <img src={img} className="w-full" alt="Hello" />
    </div>

    <div className='max-w-screen-xl mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      <div className="w-full mx-auto">
        <div className='mt-20'>
          <Slider {...settings} className="m-8"> 
{data.map((d)=>(
  <div className='bg-white h-96 text-black rounded-xl p-4 shadow-md'>
    <div className='h-56 rounded-t-xl bg-blue-100 flex justify-center items-center'>
    <img src={d.image} alt="" className='h-44 w-44 rounded-full mx-auto mt-4 object-cover'/>
    </div>
    <div className='flex flex-col justify-center items-center gap-4 p-4'> 
    <p className='text-xl font-semibold text-center mt-2'>{d.name}</p>
    <p className='italic text-sm text-center'>{d.review}</p>
   
    </div>
    </div>
)

)}
</Slider>
</div>
</div>

    
  </div>
 <Footer1/>
    </div>
  )
}

const data = [
  {
    name:'Butter Chicken',
   image:
      'https://media.istockphoto.com/id/1373284422/photo/indian-creamy-butter-chicken-curry-with-paratha-bread-served-in-copper-bowl.jpg?s=1024x1024&w=is&k=20&c=vlzGwuYz4ivI-GE1OK3LbnoUgShUIWgKqxwr6ftBu0M=',
      review:"'Revolutionize your dinner with butter chicken.'",

  
  },
  {
    name:'Hot and Sour Soup',
   
    image:
      'https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/veg-hot-and-sour-soup-1.jpg',
      review:"'Soup's On - When It's Hot We're Here'",
   
  },
  {
    name:'Paneer Butter Masala',
  
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review:"' Paneer paradise- come and enjoy!'",
    
  },
  {
    name:'Pomphret Fish Fry',
   
    image:
      'https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1915984633.jpg',
      review:"'If It’s Fishy, It’s Tasty.'",
    
  },
  {
    name:'Hyderabadi biryani',
   
    image:
      'https://www.jeyashriskitchen.com/wp-content/uploads/2016/01/hyderabadi-dum-biryani-1-500x500.jpg',
      review:"'Indulge in the flavorful world of Biryani.'",
  
  },
  {
    name:'Dal Fry',
    
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBzWs5b-2SXCSYYOqNdHKIuoQLzxeBDK1WJerO2v61A&s',
      review:"'From dal tadka to dal fry, our menu will make you sigh.'",
   
  },
  {
    name:'Cheese Garlic Naan',
   
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNGZVrsD4UVaBit2fhrsGa766MOxRpQmWvg&usqp=CAU',
      review:"'For the love of Garlic Cheese Naan, satisfy your cravings'",
   
  },
  {
    name:' New York cheesecake',
   
    image:
      'https://prettysimplesweet.com/wp-content/uploads/2018/10/New-York-Cheesecake.jpg',
      review:"'Indulge in pure decadence with our irresistible cheesecakes that will leave you wanting more!'",
    
  },
  
];
