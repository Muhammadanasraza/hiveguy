import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

import avatar from '../assets/images/avatar.jpg'

import DropDown from "./ui/DropDown";
import { CgProfile } from "react-icons/cg";
import ProfileDropdown from "./ui/ProfileDropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
    console.log("User logged in")
  }

  const handleSignup = () => {
    setIsLoggedIn(true)
    console.log("User signed up")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    console.log("User logged out")
  }

  const user = "login"

  return (
    <header className="bg-gradient-to-r from-[#F81972] to-[#2F155B] text-white">
      <div className="text-center border-b-1 border-b-white p-1">
        <span className="text-lg">Welcome to HiveGY online eCommerce store.</span>
      </div>
      {/* Top Section */}
      <div className=" lg:max-w-7xl md:w-4/4 max-sm:w-screen mx-auto px-6 py-1 sm:px-4 sm:gap-1 lg:gap-5 md:gap-2   flex flex-col sm:flex-row items-center justify-between">
        {/* Logo */}
        <div className=" rounded-full p-2  sm:mb-0">
          <img src={avatar} alt="Logo" className="rounded-full w-10 h-10" />
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
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
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
          {
            user === 'login' ?
              <div className="flex items-center gap-1 ">
                <a className="flex items-center gap-1" href="/profile">

                  <img class="w-10 h-10 rounded-full mr-3 max-sm:hidden max-md:hidden" src={avatar} alt="" />

               

                </a>
                <h1>anasraza</h1>
                <ProfileDropdown
                  isLoggedIn={isLoggedIn}
                  onLogin={handleLogin}
                  onSignup={handleSignup}
                  onLogout={handleLogout}
                />
              </div> :
              <div>

                <a href="/authpage" className="hover:underline px-3">
                  Login
                </a>
                <a href="#" className="hover:underline">
                  Sign up
                </a>
              </div>
          }

          <a href="/addtocart" className="relative">
            <MdOutlineShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black rounded-full px-1">
              3
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="  mx-auto bg-gradient-to-r from-[#98164a] to-[#250b56] border-t-1 border-black">
      <div className="  mx-auto  py-2">
        <div className="container   px-2 flex flex-col sm:flex-row items-center ">
          {/* Category Dropdown */}
          <DropDown />

          {/* Bottom Links */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start max-sm:mt-2 gap-4 text-[13px] text-center sm:text-left">
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
      </div>
    </header>
  );
};

export default Header;
