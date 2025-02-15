import React from "react";
import { FaTruck, FaShieldAlt } from "react-icons/fa";
import { IoReturnUpBackSharp } from "react-icons/io5";

const Features = () => {
  return (
    <div className="flex flex-wrap max-sm:flex-nowrap max-sm:justify-between  max-sm:text-center justify-around items-center pt-4 gap-6 lg:gap-0">
      {/* Free Returns */}
      <div className="flex items-center space-x-3 max-w-xs w-full sm:w-auto">
        <div className="bg-[#31035D] p-3 rounded-full max-sm:mx-auto flex-shrink-0">
          <IoReturnUpBackSharp className="text-white text-1xl" />
        </div>
        <div className="max-sm:hidden">
          <h3 className="text-purple-800 font-semibold text-sm text-center md:text-left">
            FREE RETURNS
          </h3>
          <p className="text-gray-600 text-[11px] text-center md:text-left">
            Within 7 Days
          </p>
        </div>
      </div>

      {/* Local Stock */}
      <div className="flex items-center space-x-3 max-w-xs w-full sm:w-auto">
        <div className="bg-[#31035D] p-3 rounded-full max-sm:mx-auto flex-shrink-0">
          <FaTruck className="text-white text-1xl" />
        </div>
        <div className="max-sm:hidden">
          <h3 className="text-purple-800 font-semibold text-sm text-center md:text-left">
            LOCAL STOCK
          </h3>
          <p className="text-gray-600 text-[11px] text-center md:text-left">
            Ships in 24hrs
          </p>
        </div>  
      </div>

      {/* Warranty */}
      <div className="flex items-center space-x-3 max-w-xs w-full sm:w-auto">
        <div className="bg-[#31035D] p-3 rounded-full max-sm:mx-auto flex-shrink-0">
          <FaShieldAlt className="text-white text-1xl" />
        </div>
        <div className="max-sm:hidden">
          <h3 className="text-purple-800 font-semibold text-sm text-center md:text-left">
            WARRANTY
          </h3>
          <p className="text-gray-600 text-[11px] text-center md:text-left">
            Within 7 Days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
