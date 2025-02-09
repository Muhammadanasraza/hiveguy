// import React from "react";
// import { RiArrowRightLine } from "react-icons/ri";
// import { BiArrowBack } from "react-icons/bi";
// import shoe1 from "../assets/images/shoes.png";
// import pinkbg from "../assets/images/pinkbg.png";
// import ProductCard from "..//Components/ui/ProductCard";

// const products = [
//   {
//     id: 1,
//     title: "For Original ww38 M47 Wireless Smartwatch",
//     price: 2903,
//     rating: 4,
//     Sold: 4000,
//     image: shoe1,
//     badges: ["Free Shipping", "COD"],
//   },
//   {
//     id: 2,
//     title: "For Original ww38 M47 Wireless Smartwatch",
//     price: 2903,
//     rating: 4,
//     Sold: 4000,
//     image: shoe1,
//     badges: ["Free Shipping", "COD"],
//   },
//   {
//     id: 3,
//     title: "For Original ww38 M47 Wireless Smartwatch",
//     price: 2903,
//     rating: 4,
//     Sold: 4000,
//     image: shoe1,
//     badges: ["Free Shipping", "COD"],
//   },
//   {
//     id: 4,
//     title: "For Original ww38 M47 Wireless Smartwatch",
//     price: 2903,
//     rating: 4,
//     Sold: 4000,
//     image: shoe1,
//     badges: ["Free Shipping", "COD"],
//   },
//   {
//     id: 4,
//     title: "For Original ww38 M47 Wireless Smartwatch",
//     price: 2903,
//     rating: 4,
//     Sold: 4000,
//     image: shoe1,
//     badges: ["Free Shipping", "COD"],
//   },
//   {
//     id: 4,
//     title: "For Original ww38 M47 Wireless Smartwatch",
//     price: 2903,
//     rating: 4,
//     Sold: 4000,
//     image: shoe1,
//     badges: ["Free Shipping", "COD"],
//   },
// ];

// const TopSellingShoes = () => {
//   return (
//     <div
//       className="py-10 mb-10 px-4 bg-cover bg-center"
//       style={{ backgroundImage: `url(${pinkbg})` }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-black text-3xl font-bold mb-8">Top Selling Shoes</h2>

//         <div className="relative flex items-center">
//           <button className="absolute left-[-20px] bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition hidden sm:block">
//             <BiArrowBack className="w-6 h-6 text-black" />
//           </button>

//           <div className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide">
//             {products.map((product, index) => (
//               <div key={index} className="flex-shrink-0 w-64">
//                 <ProductCard {...product} />
//               </div>
//             ))}
//           </div>

//           <button className="absolute right-[-20px] bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition hidden sm:block">
//             <RiArrowRightLine className="w-6 h-6 text-black" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopSellingShoes;


"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { RiArrowRightLine } from "react-icons/ri"
import { BiArrowBack } from "react-icons/bi"
import shoe1 from "../assets/images/shoes.png"
import pinkbg from "../assets/images/pinkbg.png"
import ProductCard from "../Components/ui/ProductCard"

const products = [
  {
    id: 1,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image: shoe1,
    badges: ["Free Shipping", "COD"],
  },
  {
    id: 2,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image: shoe1,
    badges: ["Free Shipping", "COD"],
  },
  {
    id: 3,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image: shoe1,
    badges: ["Free Shipping", "COD"],
  },
  {
    id: 4,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image: shoe1,
    badges: ["Free Shipping", "COD"],
  },
  {
    id: 5,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image: shoe1,
    badges: ["Free Shipping", "COD"],
  },
  {
    id: 6,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image: shoe1,
    badges: ["Free Shipping", "COD"],
  },
  // ... (rest of the products array)
]

const TopSellingShoes = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4)
      } else if (window.innerWidth >= 768) {
        setCardsToShow(3)
      } else {
        setCardsToShow(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow >= products.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - cardsToShow : prevIndex - 1))
  }

  return (
    <div className="py-10 mb-10   w-full bg-gradient-to-r from-[#ff96b9] to-[#d2a2ff] p-10 text-white" >
      <div className="max-w-6xl mx-auto px-2">
        <h2 className="text-black text-3xl font-bold mb-8">Top Selling Shoes</h2>

        <div className="relative">
          <button
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
            onClick={prevSlide}
          >
            <BiArrowBack className="w-6 h-6 text-black" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-full sm:w-full md:w-1/3 lg:w-1/4 px-3`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition z-10"
            onClick={nextSlide}
          >
            <RiArrowRightLine className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopSellingShoes

