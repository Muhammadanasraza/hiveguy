
import  React from "react"
import { useState, useRef, useEffect } from "react"
import { CgProfile } from "react-icons/cg"
import { MdOutlineShoppingCart, MdFavorite, MdExitToApp, MdLogin, MdPersonAdd } from "react-icons/md"
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineReviews } from "react-icons/md";

const ProfileDropdown = ({ isLoggedIn, onLogin, onSignup, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef (null)

  useEffect(() => {
    const handleOutsideClick = (event ) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target  )) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className=""
        aria-label="Profile"
      >
       <RiArrowDropDownLine className="text-3xl items-center justify-center "/>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-20">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl text-black font-bold">Profile</h2>
          </div>
          <div className="p-4 ">
            <ul className="space-y-3">
              {isLoggedIn ? (
                <>
                  <li className="flex items-center gap-3  hover:bg-gray-100 p-1 border-b border-gray-300  cursor-pointer">
                    <CgProfile className="text-xl text-black" />
                    <a href='/manageprofile' className="text-black">Manage Account</a>
                  </li>
                  <li className="flex items-center gap-3 text-black hover:bg-gray-100 p-2  border-b border-gray-300 cursor-pointer">
                    <MdOutlineShoppingCart className="text-xl text-black" />
                    <span>My Orders</span>
                  </li>
                  <li className="flex items-center gap-3 text-black hover:bg-gray-100 p-2 border-b border-gray-300 cursor-pointer">
                    <MdFavorite className="text-xl text-black" />
                    <span>Wishlist</span>
                  </li>
                  <li className="flex items-center gap-3 text-black hover:bg-gray-100 p-2 border-b border-gray-300 cursor-pointer">
                    <MdOutlineReviews className="text-xl text-black" />
                    <span>My Reviews</span>
                  </li>
                  <li
                    className="flex items-center gap-3 text-black hover:bg-gray-100 p-2 border-b border-gray-300 cursor-pointer"
                    onClick={onLogout}
                  >
                    <MdExitToApp className="text-xl text-black" />
                    <span>Logout</span>
                  </li>
                </>
              ) : (
                <div className="gap-2">
                  <li
                    className="flex items-center gap-3  text-black hover:bg-gray-100 p-2 border-b border-gray-300 cursor-pointer"
                    onClick={onLogin}
                  >
                    <MdLogin className="text-xl text-black" />
                    <span>Login</span>
                  </li>
                  <li
                    className="flex items-center gap-3 text-black hover:bg-gray-100 p-2 border-b border-gray-300 cursor-pointer"
                    onClick={onSignup}
                  >
                    <MdPersonAdd className="text-xl text-black" />
                    <span>Sign Up</span>
                  </li>
                </div>
              )}
            </ul>
          </div>
        
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown

