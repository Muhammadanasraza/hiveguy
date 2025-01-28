import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiArrowDropDownLine } from "react-icons/ri";

const NestedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActiveCategory(null); // Reset active category when opening/closing
  };

  const toggleSubMenu = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="relative mb-4">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-3 bg-gray-300 text-black px-5 py-2 rounded-lg shadow-lg"
      >
        <TfiMenuAlt />
        <div className="flex gap-2 items-center">
          <span>Category</span>
          <RiArrowDropDownLine />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg">
          {/* Main Categories */}
          <div className="py-2">
            <button
              onClick={() => toggleSubMenu("Profile")}
              className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
            >
              Profile
              <RiArrowDropDownLine
                className={`transform transition-transform ${
                  activeCategory === "Profile" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeCategory === "Profile" && (
              <div className="pl-6">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  View Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Edit Profile
                </a>
              </div>
            )}

            <button
              onClick={() => toggleSubMenu("Settings")}
              className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
            >
              Settings
              <RiArrowDropDownLine
                className={`transform transition-transform ${
                  activeCategory === "Settings" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeCategory === "Settings" && (
              <div className="pl-6">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Account Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Privacy Settings
                </a>
              </div>
            )}

            <button
              onClick={() => toggleSubMenu("Logout")}
              className="flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
            >
              Logout
              <RiArrowDropDownLine
                className={`transform transition-transform ${
                  activeCategory === "Logout" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeCategory === "Logout" && (
              <div className="pl-6">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Confirm Logout
                </a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                  Cancel Logout
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;
