// import { useRef } from "react";
// import { RiArrowRightLine } from "react-icons/ri";
// import { BiArrowBack } from "react-icons/bi";
// import png1 from "../assets/images/category/1.png";
// import ProductCard from "./ui/ProductCard";

// export default function TopSellers() {
//   const scrollRef = useRef(null);
//   const products = [
//     {
//       id: 1,
//       title: "For Original ww38 M47 Wireless Smartwatch",
//       price: 2903,
//       rating: 4,
//       sold: 4000,
//       image: png1,
//       badges: ["Free Shipping", "COD"],
//     },
//     {
//       id: 2,
//       title: "For Original ww38 M47 Wireless Smartwatch",
//       price: 2903,
//       rating: 4,
//       sold: 4000,
//       image: png1,
//       badges: ["Free Shipping", "COD"],
//     },
//     {
//       id: 3,
//       title: "For Original ww38 M47 Wireless Smartwatch",
//       price: 2903,
//       rating: 4,
//       sold: 4000,
//       image: png1,
//       badges: ["Free Shipping", "COD"],
//     },
//     {
//       id: 4,
//       title: "For Original ww38 M47 Wireless Smartwatch",
//       price: 2903,
//       rating: 4,
//       sold: 4000,
//       image: png1,
//       badges: ["Free Shipping", "COD"],
//     },
//     {
//       id: 5,
//       title: "For Original ww38 M47 Wireless Smartwatch",
//       price: 2903,
//       rating: 4,
//       sold: 4000,
//       image: png1,
//       badges: ["Free Shipping", "COD"],
//     },
//     {
//       id: 6,
//       title: "For Original ww38 M47 Wireless Smartwatch",
//       price: 2903,
//       rating: 4,
//       sold: 4000,
//       image: png1,
//       badges: ["Free Shipping", "COD"],
//     },
//   ];

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="py-5 my-10 max-w-7xl mx-auto px-4">
//       <h2 className="text-3xl pl-3 font-bold text-left mb-6">Top Sellers</h2>
//       <div className="relative flex items-center">
//         {/* Scroll Left Button */}
//         <button
//           onClick={scrollLeft}
//           className="absolute left-0 bg-white rounded-full shadow p-2 z-10 hidden md:block"
//         >
//           <BiArrowBack className="text-2xl" />
//         </button>

//         {/* Scrollable Product List */}
//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-4 w-full"
//           style={{ scrollSnapType: "x mandatory" }}
//         >
//           {products.map((product) => (
//             <div key={product.id} className="flex-shrink-0 w-60 snap-center md:w-72 lg:w-80">
//               <ProductCard {...product} />
//             </div>
//           ))}
//         </div>

//         {/* Scroll Right Button */}
//         <button
//           onClick={scrollRight}
//           className="absolute right-0 bg-white rounded-full shadow p-2 z-10 hidden md:block"
//         >
//           <RiArrowRightLine className="text-2xl" />
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "./ui/ProductCard"

import png1 from "../assets/images/category/1.png";

const products = [
      {
        id: 1,
        title: "For Original ww38 M47 Wireless Smartwatch",
        price: 2903,
        rating: 4,
        sold: 4000,
        image: png1,
        badges: ["Free Shipping", "COD"],
      },
      {
        id: 2,
        title: "For Original ww38 M47 Wireless Smartwatch",
        price: 2903,
        rating: 4,
        sold: 4000,
        image: png1,
        badges: ["Free Shipping", "COD"],
      },
      {
        id: 3,
        title: "For Original ww38 M47 Wireless Smartwatch",
        price: 2903,
        rating: 4,
        sold: 4000,
        image: png1,
        badges: ["Free Shipping", "COD"],
      },
      {
        id: 4,
        title: "For Original ww38 M47 Wireless Smartwatch",
        price: 2903,
        rating: 4,
        sold: 4000,
        image: png1,
        badges: ["Free Shipping", "COD"],
      },
      {
        id: 5,
        title: "For Original ww38 M47 Wireless Smartwatch",
        price: 2903,
        rating: 4,
        sold: 4000,
        image: png1,
        badges: ["Free Shipping", "COD"],
      },
      {
        id: 6,
        title: "For Original ww38 M47 Wireless Smartwatch",
        price: 2903,
        rating: 4,
        sold: 4000,
        image: png1,
        badges: ["Free Shipping", "COD"],
      },
    ];

const TopSellers = () => {
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
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          initial={false}
          animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className={`flex-shrink-0 w-full sm:w-full md:w-1/3 lg:w-1/4 p-4`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard {...product}/>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default TopSellers;

