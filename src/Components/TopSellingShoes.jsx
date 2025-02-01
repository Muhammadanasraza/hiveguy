import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import shoe1 from "../assets/images/shoes.png";
import pinkbg from "../assets/images/pinkbg.png";
import ProductCard from "..//Components/ui/ProductCard";

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
    id: 4,
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
];

const TopSellingShoes = () => {
  return (
    <div
      className="py-10 mb-10 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${pinkbg})` }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-black text-3xl font-bold mb-8">Top Selling Shoes</h2>

        <div className="relative flex items-center">
          <button className="absolute left-[-20px] bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition hidden sm:block">
            <BiArrowBack className="w-6 h-6 text-black" />
          </button>

          <div className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide">
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <button className="absolute right-[-20px] bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition hidden sm:block">
            <RiArrowRightLine className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSellingShoes;