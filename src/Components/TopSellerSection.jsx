import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { RiArrowRightLine } from "react-icons/ri";
import { FaStar, FaRegStar } from "react-icons/fa";
import png1 from "../assets/images/category/1.png";
import ProductCard from "./ui/ProductCard";

export default function TopSellers() {
  const [currentIndex, setCurrentIndex] = useState(0);

 
 const products = [
   {
     id: 1,
     title: "For Original ww38 M47 Wireless Smartwatch",
     price: 2903,
     rating: 4,
     Sold: 4000,
     image:png1,
     badges: ["Free Shipping", "COD"],
   },
   {
     id: 1,
     title: "For Original ww38 M47 Wireless Smartwatch",
     price: 2903,
     rating: 4,
     Sold: 4000,
     image:png1,
     badges: ["Free Shipping", "COD"],
   },
   {
     id: 1,
     title: "For Original ww38 M47 Wireless Smartwatch",
     price: 2903,
     rating: 4,
     Sold: 4000,
     image:png1,
     badges: ["Free Shipping", "COD"],
   },
   {
     id: 1,
     title: "For Original ww38 M47 Wireless Smartwatch",
     price: 2903,
     rating: 4,
     Sold: 4000,
     image:png1,
     badges: ["Free Shipping", "COD"],
   },
   // Add more products as needed
 ]
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="py-5 my-10 w-7xl justify-center mx-auto">
      <h2 className="text-3xl pl-3 font-bold text-left mb-6">Top Sellers</h2>
      <div className="relative flex items-center justify-center">
        {/* Slider Control - Previous */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-0 bg-white rounded-full shadow p-2 z-10"
        >
          <RiArrowRightLine className="text-2xl" />
        </button>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden p-4 w-full">
          {products.map((product, index) => (
            <ProductCard key={index} {...product}/>
          ))}
        </div>

        {/* Slider Control - Next */}
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-0 bg-white rounded-full shadow p-2 z-10"
        >
          <BiArrowBack className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
