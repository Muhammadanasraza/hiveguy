import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import DropDown from "./ui/DropDown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-[#F81972] to-[#2F155B] text-white">
      <div className="text-center border-b-1 border-b-white p-1">
        <span className="text-lg">Welcome to HiveGY online eCommerce store.</span>
      </div>
      {/* Top Section */}
      <div className="container mx-auto px-6 py-1 sm:px-4 gap-5 border-b-1 border-b-black flex flex-col sm:flex-row items-center justify-between">
        {/* Logo */}
        <div className="bg-white rounded-full p-2 mb-4 sm:mb-0">
          <img src="https://via.placeholder.com/50" alt="Logo" className="w-8 h-8" />
        </div>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row gap-2  w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search in HiveGY"
            className="w-full sm:w-lg px-2 py-2 rounded-md border bg-white text-gray-600 border-gray-300 outline-none mb-4 sm:mb-0"
          />
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-300 mb-4 sm:mb-0">
            Search
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_South_Africa.svg"
              alt="Flag"
              className="w-6 h-4"
            />
            <select className="bg-transparent border-none text-white outline-none">
              <option>English-US</option>
              <option>English-UK</option>
            </select>
          </div>
          <a href="#" className="hover:underline">
            Login
          </a>
          <a href="#" className="hover:underline">
            Sign up
          </a>
          <a href="#" className="relative">
            <MdOutlineShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black rounded-full px-1">
              3
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="bg-gradient-to-r from-[#98164a] to-[#250b56] py-1">
        <div className="container mx-auto px-6 sm:px-13 flex flex-col sm:flex-row items-center justify-between">
          {/* Category Dropdown */}
          <DropDown/>

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-center sm:text-left">
            <a href="#" className="hover:underline">
              Track Your Order
            </a>
            <a href="#" className="hover:underline">
              Become a Seller
            </a>
            <a href="#" className="hover:underline">
              HiveGY Affiliate Program
            </a>
            <a href="#" className="hover:underline">
              Help & Support
            </a>
            <a href="#" className="hover:underline">
              Get the app
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
