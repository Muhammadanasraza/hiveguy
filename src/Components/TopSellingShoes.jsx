import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { FaRegStar, FaStar } from "react-icons/fa";
import shoe1 from "../assets/images/shoes.png";
import shoe2 from "../assets/images/shoes.png";
import shoe3 from "../assets/images/shoes.png";
import shoe4 from "../assets/images/shoes.png";
import pinkbg from "../assets/images/pinkbg.png";

const products = [
  {
    id: 1,
    image: shoe1,
    name: "For Original wwJBL M47 Wireless...",
    sold: " 4,000+ sold",
    price: "2,903",
    oldPrice: "PKR 2,903",
    rating: 3,
  },
  {
    id: 2,
    image: shoe2,
    name: "Leather Men Shoes Sneakers Wireless...",
    sold: " 4,000+ sold",
    price: " 2,903",
    oldPrice: "PKR 2,903",
    rating: 3,
  },
  {
    id: 3,
    image: shoe3,
    name: "For Original wwJBL M47 Wireless...",
    sold: "4,000+ sold",
    price: "2,903",
    oldPrice: "PKR 2,903",
    rating: 3,
  },
  {
    id: 4,
    image: shoe4,
    name: "For Original wwJBL M47 Wireless...",
    sold: "4,000+ sold",
    price: "2,903",
    oldPrice: "PKR 2,903",
    rating: 3,
  },
];

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
              <div
                key={index}
                className="relative  rounded-lg shadow-md p-4 w-[250px] h-[320px] transition-transform duration-300 transform overflow-hidden hover:shadow-lg hover:scale-105 group bg-white flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto w-36 object-cover mb-6"
                />
                <h3 className="text-sm font-semibold mb-2 font-sans">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) =>
                    i < product.rating ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                </div>
                <p className="text-xs text-gray-500 mb-2 font-sans">
                  {product.sold}
                </p>
                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold font-sans">
                    PKR {product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through ml-2 font-sans">
                    {product.oldPrice}
                  </span>
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-lg text-sm font-sans">
                    See Preview
                  </button>
                </div>
              </div>
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
