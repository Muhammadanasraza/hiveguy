import { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { IoShirt } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";

const categories = [
  {
    id: "home-garden",
    label: "Home Garden",
    icon: IoHome,
    subcategories: {
      bathroom: { title: "Bathroom", items: ["Towel", "Paper Holder"] },
      bedroom: { title: "Bedroom", items: ["Boxes", "Bags"] },
      living: { title: "Living Room", items: ["Painting By Numbers", "Hooks"] },
    },
  },
  {
    id: "clothing",
    label: "Men's Clothing",
    icon: IoShirt,
    subcategories: {
      tops: { title: "Tops", items: ["T-Shirts", "Shirts"] },
      bottoms: { title: "Bottoms", items: ["Jeans", "Shorts"] },
    },
  },
  {
    id: "electronics",
    label: "Consumer Electronics",
    icon: FiSmartphone,
    subcategories: {
      computers: { title: "Computers", items: ["Laptops", "Desktops"] },
      phones: { title: "Phones", items: ["Smartphones", "Chargers"] },
    },
  },
];

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative w-full max-w-[150px] max-sm:mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full justify-between px-4 py-2 bg-gray-200 rounded-full border border-gray-400 cursor-pointer transition duration-200"
      >
        <span className="font-medium text-black">Category</span>
        <RiArrowDropDownLine
          className={`w-6 h-6 text-black transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full max-sm:w-full w-2xl mt-2 bg-white rounded-lg shadow-lg z-50 flex border border-gray-200">
          <div className="w-40 max-sm:w-32 border-r border-gray-200">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer transition duration-200 ${activeCategory.id === category.id ? "bg-gray-100" : "hover:bg-gray-50"}`}
              >
                <category.icon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-800 text-sm">{category.label}</span>
              </div>
            ))}
          </div>
          <div className="flex-1 p-4 grid grid-cols-2 gap-4">
            {activeCategory.subcategories ? (
              Object.values(activeCategory.subcategories).map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-gray-900">{section.title}</h3>
                  {section.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-sm text-gray-600 mt-1 hover:text-gray-900"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))
            ) : (
              <div className="text-gray-500">No subcategories available.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}



// import   React from "react"
// import { useState } from "react"
// import {
//   FaChevronUp,
//   FaHome,
//   FaCut,
//   FaTshirt,
//   FaShoppingBag,
//   FaMobileAlt,
//   FaLightbulb,
//   FaTv,
//   FaCar,
//   FaBriefcase,
//   FaShoePrints,
//   FaWifi,
// } from "react-icons/fa"
// import { FiMenu } from "react-icons/fi"

 

// const categories = [
//   { icon: FaHome, label: "Home Garden" },
//   { icon: FaCut, label: "Hair Extensions & Wigs" },
//   { icon: FaTshirt, label: "Men's Clothing" },
//   { icon: FaShoppingBag, label: "Accessories" },
//   { icon: FaMobileAlt, label: "Consumer Electronics" },
//   { icon: FaLightbulb, label: "Home Improvement & Lighting" },
//   { icon: FaTv, label: "Home Appliances" },
//   { icon: FaCar, label: "Automotive & Motorcycle" },
//   { icon: FaBriefcase, label: "Luggages & Bags" },
//   { icon: FaShoePrints, label: "Shoes" },
//   { icon: FaWifi, label: "Special Occasion Costume" },
// ]

// export default function CategoryMenu() {
//   const [isOpen, setIsOpen] = useState(true)

//   return (
//     <div className="w-full max-w-sm mx-auto bg-gray-200 rounded-4xl shadow-md overflow-hidden">
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         className=" flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
//       >
//         <div className="flex items-center gap-2">
//           <FiMenu className="h-5 w-5 text-gray-500" />
//           <h2 className="font-medium text-black">Category</h2>
//         </div>
//         <FaChevronUp
//           className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${!isOpen ? "rotate-180" : ""}`}
//         />
//       </div>
//       <div
//         className={`relative overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-[400px]" : "max-h-0"}`}
//       >
//         <div
//           className={`absolute right-0 w-1 bg-pink-500 transition-all duration-200 ${isOpen ? "top-0 bottom-4" : "h-0"}`}
//         />
//         <div
//           className={`overflow-y-auto max-h-[400px] px-4 py-2 transition-all duration-200 ${isOpen ? "opacity-100" : "opacity-0"}`}
//         >
//           <div className="space-y-4">
//             {categories.map((category, index) => {
//               const Icon = category.icon
//               return (
//                 <button
//                   key={index}
//                   className="flex items-center gap-3 w-full text-left hover:bg-gray-50 rounded-lg p-1 transition-colors"
//                 >
//                   <Icon className="h-5 w-5 text-gray-500 shrink-0" />
//                   <span className="text-sm">{category.label}</span>
//                 </button>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

