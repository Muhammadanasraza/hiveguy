"use client"

import { useState, useRef, useEffect } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoShirt } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";
import { CiPen } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { IoGift } from "react-icons/io5";


const categories = [
  {
    id: "home-garden",
    label: "Home Garden",
    icon: IoHome,
    subcategories: {
      // kitchen: {
      //   title: "Kitchen",
      //   items: [
      //     "Mug Thermos",
      //     "Basket",
      //     "Waterproof Wall Sticker",
      //     "Home Brewing & Wine Making Barware",
      //     "Table Decoration & Accessories",
      //     "Wok",
      //   ],
      // },
      bathroom: {
        title: "Bathroom",
        items: ["Towel", "Paper Holder", ],
      },
      bedroom: {
        title: "Bedroom",
        items: ["Boxes", "Bags", "Decorative Mirrors", "Tapestries"],
      },
      living: {
        title: "Living Room",
        items: [
          "Painting By Numbers",
          "Hooks",
          
        ],
      },
    },
  },
  {
    id: "clothing",
    label: "Men's Clothing",
    icon: IoShirt,
    subcategories: {
      tops: {
        title: "Tops",
        items: ["T-Shirts", "Shirts", "Polo Shirts", "Hoodies", "Sweaters"],
      },
      bottoms: {
        title: "Bottoms",
        items: ["Jeans", "Trousers", "Shorts", "Sweatpants"],
      },
    },
  },
  {
    id: "elect  ronics",
    label: "Consumer Electronics",
    icon: FiSmartphone,
    subcategories: {
      computers: {
        title: "Computers",
        items: ["Laptops", "Desktops", "Tablets", "Accessories"],
      },
      phones: {
        title: "Phones",
        items: ["Smartphones", "Feature Phones", "Cases", "Chargers"],
      },
    },
  },
  { id: "accessories", label: "Accessories", icon: MdOutlineWatchLater },
  { id: "improvement", label: "Home Improvement & Lighting", icon: CiPen },
  { id: "appliances", label: "Home Appliances", icon: IoHome },
  // { id: "automotive", label: "Automotive & Motorcycle", icon: FaCar },
  // { id: "luggage", label: "Luggages & Bags", icon: FaShoppingCart },
  // { id: "business", label: "Business & Industrial", icon: GoBriefcase },
  // { id: "occasion", label: "Special Occasion Costume", icon: IoGift },
]

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event ) {
      if (menuRef.current && !menuRef.current.contains(event.target )) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={menuRef} className="relative w-full  max-w-2xl mx-auto">
      <button
        className="flex items-center w-40  gap-2 justify-between px-4 py-1 bg-gray-300 rounded-full  border-gray-500 hover:bg-gray-200 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-black">Category</span>
        <RiArrowDropDownLine className={`w-4 h-4 transition-transform text-black duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute top-full  mt-2 bg-white rounded-2xl shadow-lg flex
          transition-all duration-200 ease-in-out origin-top
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}`}
      >
        {/* Categories Sidebar */}
        <div className="lg:w-72 max-sm:w-40 border-r border-gray-100 ">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors
                ${activeCategory.id === category.id ? "bg-gray-100" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              <category.icon className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-700">{category.label}</span>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="flex-1 p-8 grid lg:grid-cols-4 md:grid-cols-4 max-sm:grid-cols-2 gap-8">
          {activeCategory.subcategories ? (
            Object.values(activeCategory.subcategories).map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="font-semibold text-gray-900">{section.title}</h3>
                <div className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <a key={item} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 flex items-center justify-center text-gray-500">
              No subcategories available for this category.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

