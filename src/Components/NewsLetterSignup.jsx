import React from "react";
import vector from '../assets/images/Vector.png';

const NewsletterSignup = () => {
  return (
    
      <div className="bg-[#321159] my-10 container items-center  text-white py-4 px-6 rounded-lg flex   max-w-7xl w-full  ">
        {/* Left Section - Icon and Text */} 
        <div className="flex items-center lg:items-start flex-col lg:flex-row">
          <div className="p-4 rounded-full flex justify-center items-center mb-4 lg:mb-0 lg:mr-6">
            <img src={vector} alt="Newsletter Icon" />
          </div>
        </div>
          <div className="justify-center">
            <h2 className="text-2xl font-bold mb-2">Sign Up for Newsletter</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

        {/* Right Section - Email Input */}
        <div className="mt-6 lg:mt-0 p-1 bg-white rounded-lg">
          <div className="flex items-center  ">
            <input
              type="email"
              placeholder="Enter your email here"
              className="px-4 py-3 bg-white rounded-l-lg w-full lg:w-72 text-gray-900 focus:outline-none"
            />
            <button className="bg-yellow-400  text-zinc-600 px-6 py-3 rounded-r-lg hover:bg-yellow-500">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
  );
};

export default NewsletterSignup;
