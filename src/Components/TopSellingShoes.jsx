import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import shoe1 from "../assets/images/shoes.png";
import pinkbg from "../assets/images/pinkbg.png";
import ProductCard from  "..//Components/ui/ProductCard"


const products = [
  {
    id: 1,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image:shoe1,
    badges: ["Free Shipping", "COD"],
  },
  {
    id: 1,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image:shoe1,
    badges: ["Free Shipping", "COD"],
  },
  {
    id: 1,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image:shoe1,
    badges: ["Free Shipping", "COD"],
  },
  {
    id: 1,
    title: "For Original ww38 M47 Wireless Smartwatch",
    price: 2903,
    rating: 4,
    Sold: 4000,
    image:shoe1,
    badges: ["Free Shipping", "COD"],
  },
  // Add more products as needed
]
const TopSellingShoes = () => {
  return (
    <div
      className="py-10 mb-10 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${pinkbg})` }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-black text-3xl font-bold mb-8">Top Selling Shoes</h2>

        {/* Carousel Container */}
        <div className="relative flex items-center">
          <button className="absolute left-[-20px] bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition hidden sm:block hidden-md:block">
            <BiArrowBack className="w-6 h-6 text-black" />
          </button>
          {/* Left Arrow */}

          {/* Product Cards */}
          <div className="flex gap-6  overflow-x-auto justify-center scrollbar-hide w-full p-4">
            {products.map((product, index) => (
              <ProductCard  key={index} {...product} />
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-[-20px] bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition hidden sm:block">
            <RiArrowRightLine className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSellingShoes;
