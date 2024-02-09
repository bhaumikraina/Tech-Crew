import React from 'react';

import FOOTER1 from '../components/Footer1';
import Navbar1 from '../components/Navbar1';  

export default function About() {
  return (
    <div className="bg-gray-100 mt-36">
      {/* Navbar Section */}
      <Navbar1 style={{ background: "#333", color: "#fff", padding: "10px" }} />

      {/* About Section */}
      <section className="container mx-auto py-16">
        {/* Main Title */}
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        {/* First Info Block */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/traditional-italian-food-world-tourism-day_23-2149114038.jpg?w=996&t=st=1706442129~exp=1706442729~hmac=c05e499f2883c4a261e161e20120dd365c13024af7768654f0b06f17a4870ca7"
              alt="Restaurant"
              className="w-full h-64 object-cover rounded-md mb-4 md:mb-0"
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed">
              We are revolutionizing the restaurant industry by offering a cutting-edge service to digitize and modernize their operations. Our platform provides comprehensive solutions, from digitized menus to efficient order management, enabling restaurants to enhance customer experiences and stay competitive in the digital era.
            </p>
          </div>
        </div>

        {/* Second Info Block */}
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image */}
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src="https://img.freepik.com/free-photo/high-angle-hand-holding-smartphone-with-menu_23-2149357850.jpg?w=996&t=st=1706441751~exp=1706442351~hmac=0b764dc0f7739a690d4fb6b73b1f4903f951c10dba8da4b768702df088957012"
              alt="Restaurant"
             
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2 order-1 md:order-2">
            <p className="text-lg leading-relaxed">
              Our mission is to empower restaurants with innovative technology, providing touch order dining experiences. We understand the evolving landscape and challenges faced by the hospitality industry, and our platform is designed to offer seamless solutions for online ordering, contactless payments, and efficient restaurant management.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FOOTER1 />
    </div>
  );
}