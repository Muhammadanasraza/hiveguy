import { useState } from "react"
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md"
import { FiMenu, FiX } from "react-icons/fi"
import avatar from "../assets/images/avatar.jpg"
import logo from "../assets/images/logo-light.png"
import DropDown from "./ui/DropDown"
import ProfileDropdown from "./ui/ProfileDropdown"
import CountryDropdown from "./CountryDropDown"

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-white shadow-md w-full">
      {/* Top Bar */}
      <div className="text-center p-2 text-sm max-sm:text-[12px] font-semibold text-white bg-gradient-to-r from-[#98164a] to-[#250b56]">
        Welcome to Hive Guyana - Shop With Convenience
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <img src={logo || "/placeholder.svg"} alt="Logo" className="w-40 max-sm:w-30" />

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search in HiveGY"
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md outline-none"
          />
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-300">
            Search
          </button>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-2">
          <CountryDropdown />
          {isLoggedIn ? (
            <div className="hidden md:flex items-center gap-2">
              <img className="w-10 h-10 rounded-full" src={avatar || "/placeholder.svg"} alt="Profile" />
              <ProfileDropdown isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
            </div>
          ) : (
            <a href="/authpage" className="hidden md:block hover:underline">
              Login
            </a>
          )}

          {/* Shopping Cart */}
          <a href="/addtocart" className="relative">
            <MdOutlineShoppingCart className="text-3xl max-sm:text-2xl" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-black rounded-full px-1">3</span>
          </a>

          {/* Small Screen Search Toggle */}
          <button className="md:hidden" onClick={() => setSearchOpen(!searchOpen)}>
            <MdSearch className="text-2xl" />
          </button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Small Screen Search Bar */}
      {searchOpen && (
        <div className="md:hidden p-2 bg-gray-100">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search in HiveGY"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md outline-none"
            />
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-r-md font-semibold hover:bg-yellow-300">
              <MdSearch />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Sidebar with Animation */}
      <div
        className={`fixed inset-0 bg-[#2e2e2e73] bg-opacity-50 z-50 transition-opacity ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={`absolute right-0 w-64 bg-white h-full shadow-lg p-4 transform transition-transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="text-2xl mb-4" onClick={() => setSidebarOpen(false)}>
            <FiX />
          </button>
          <nav className="flex flex-col gap-4 text-gray-800">
            <a href="#">Track Your Order</a>
            <a href="#">Become a Seller</a>
            <a href="#">HiveGY Affiliate Program</a>
            <a href="#">Help & Support</a>
            <a href="#">Get the App</a>
            {!isLoggedIn && (
              <a href="/authpage" className="bg-yellow-400 text-center p-2 rounded-md">
                Login
              </a>
            )}
          </nav>
        </div>
      </div>

      {/* Categories Section (Visible on all screens) */}
      <div className="bg-gradient-to-r from-[#250b56] to-[#98164a] py-2">
        <div className="max-w-6xl mx-auto flex items-center px-4 flex-wrap gap-4 text-white text-sm">
          <DropDown />
          <nav className="flex flex-wrap gap-4 max-sm:hidden">
            <a href="#">Track Your Order</a>
            <a href="#">Become a Seller</a>
            <a href="#">HiveGY Affiliate Program</a>
            <a href="#">Help & Support</a>
            <a href="#">Get the App</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

