import React from "react";
import shoes from "../assets/images/shoes.png";
import man from "../assets/images/man.png";
import bgImage from "../assets/images/image.png"; // Background image
import p70 from "../assets/images/p70.png"; 
import up from "../assets/images/up.png"; 
import sale from "../assets/images/Sale.png"; 

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-pink-700 rounded-r-full">
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="relative my-7 mx-auto rounded-r-full overflow-hidden px-13 py-6 flex items-center justify-between bg-cover bg-center"
      >
        {/* Discount Text Section */}
        <div className="text-white">
          <img className="w-70 pb-3 max-sm:w-20" src={p70} alt="" />
          <img src={up} alt="" />
          <img className="w-60 pl-10" src={sale} alt="" />
        </div>

        {/* Shoe Image */}
        <img
          src={shoes}
          alt="Shoe"
          className="absolute left-1/2 transform -translate-x-1/2 max-w-72"
        />

        {/* Model Image - FIXED FOOT & HEAD OUTSIDE */}
        
        <img
          src={man}
          alt="Model"
          className=" bottom-[-50px] max-sm:hidden right-[-10px]  lg:max-w-62 sm:w-20 object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
