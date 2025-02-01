import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import avatar from "../assets/images/avatar.jpg";
import logo from "../assets/images/logo-light.png";
import DropDown from "./ui/DropDown";
import ProfileDropdown from "./ui/ProfileDropdown";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleSignup = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  
  return (
    <header className="bg-white text-black w-full">
      {/* Top Bar */}
      <div className="text-center p-1 text-sm font-semibold text-white bg-gradient-to-r from-[#98164a] to-[#250b56]">
        Welcome to Hive Guyana - Shop With Convenience
      </div>
      
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-36 h-auto" />
          <span className="text-xl font-bold text-gray-900">Guyana</span>
        </div>
        
        {/* Search Bar */}
        <div className="hidden md:flex w-full sm:w-auto flex-1 justify-center max-w-xl">
          <input
            type="text"
            placeholder="Search in HiveGY"
            className="w-full px-4 py-2 rounded-l-md border bg-white text-gray-600 border-gray-300 outline-none"
          />
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-300">
            Search
          </button>
        </div>
        
        {/* User Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg"
              alt="Guyana Flag"
              className="w-6 h-4"
            />
            <select className="bg-transparent border-none text-black outline-none">
              <option>English-US</option>
              <option>English-UK</option>
            </select>
          </div>
          {isLoggedIn ? (
            <div className="hidden md:flex items-center gap-2">
              <img className="w-10 h-10 rounded-full" src={avatar} alt="Profile" />
              <span>Cheddi Jagan</span>
              <ProfileDropdown
                isLoggedIn={isLoggedIn}
                onLogin={handleLogin}
                onSignup={handleSignup}
                onLogout={handleLogout}
              />
            </div>
          ) : (
            <a href="/authpage" className="hidden md:inline hover:underline">Login</a>
          )}
          
          <a href="/cart" className="relative">
            <MdOutlineShoppingCart className="text-3xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black rounded-full px-1">
              3
            </span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu className="text-3xl" />
          </button>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-2">
        <input
          type="text"
          placeholder="Search in HiveGY"
          className="w-full px-4 py-2 rounded-l-md border bg-white text-gray-600 border-gray-300 outline-none"
        />
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold w-full mt-2">
          Search
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <nav className="flex flex-col gap-2 text-black text-sm">
            <a href="#" className="py-1">Track Your Order</a>
            <a href="#" className="py-1">Become a Seller</a>
            <a href="#" className="py-1">HiveGY Affiliate Program</a>
            <a href="#" className="py-1">Help & Support</a>
            <a href="#" className="py-1">Get the app</a>
          </nav>
          {!isLoggedIn && <a href="/authpage" className="block text-center py-2 mt-2 bg-yellow-400 text-black rounded-md">Login</a>}
        </div>
      )}
      
      {/* Bottom Navigation */}
      <div className="hidden md:block bg-gradient-to-r from-[#250b56] to-[#98164a] py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-1">
          <DropDown />
          <nav className="flex text-white flex-wrap gap-4 text-sm">
            <a href="#" className="">Track Your Order</a>
            <a href="#" className="">Become a Seller</a>
            <a href="#" className="">HiveGY Affiliate Program</a>
            <a href="#" className="">Help & Support</a>
            <a href="#" className="">Get the app</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
