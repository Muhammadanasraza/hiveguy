import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { RiArrowRightLine } from "react-icons/ri";
import { FaStar, FaRegStar } from "react-icons/fa";
import png1 from "../assets/images/category/1.png";

export default function TopSellers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      name: "For Original WW JBL ",
      price: "2,903",
      originalPrice: "3,903",
      image: "/earbuds.png",
      sold: "4,000+",
      rating: 4,
    },
    {
      name: "Leather Men Shoes Sneakers ",
      price: "2,903",
      originalPrice: "3,903",
      image: "/juicer.png",
      sold: "4,000+",
      rating: 5,
    },
    {
      name: "For Original WW JBL M47 Wireless...",
      price: "2,903",
      originalPrice: "3,903",
      image: "/headphones.png",
      sold: "4,000+",
      rating: 3,
    },
    {
      name: "For Original WW JBL M47 Wireless...",
      price: "2,903",
      originalPrice: "3,903",
      image: "/smartwatch.png",
      sold: "4,000+",
      rating: 4,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="py-5 my-10">
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
            <div
              key={index}
              className={`relative rounded-lg shadow-lg p-4 w-full transition-transform duration-300 transform overflow-hidden hover:shadow-lg hover:scale-105 group`}
            >
              <img
                src={png1}
                alt={product.name}
                className="mx-auto w-full max-w-[100px] object-cover mb-6"
              />
              <h3 className="text-sm font-semibold mb-2 font-sans">{product.name}</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) =>
                  i < product.rating ? (
                    <FaStar key={i} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                  )
                )}
              </div>
              <p className="text-xs text-gray-500 mb-2 font-sans">{product.sold} sold</p>
              <div className="flex items-center mb-4">
                <span className="text-lg font-bold font-sans">PKR {product.price}</span>
                <span className="text-sm text-gray-400 line-through ml-2 font-sans">
                  {product.originalPrice}
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
