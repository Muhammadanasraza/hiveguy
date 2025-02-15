'use client';

import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Button from "./button";
import airbuds from "../../assets/images/airbuds.png";
import { Link } from "react-router";

export default function CartDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const recommendedProducts = [
    {
      id: 1,
      title: "Silicone Soft Bluetooth Earphone Case",
      price: 2903,
      image: airbuds,
      rating: 5,
    },
    {
      id: 2,
      title: "Silicone Soft Bluetooth Earphone Case",
      price: 2903,
      image: airbuds,
      rating: 5,
    },

  ];

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="flex-1 bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors"
      >
        Add to Cart
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-[#353535f0] bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 animate-fade-in overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm">1 new item(s) have been added to your cart</span>
              </div>
              <Button
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Go to Cart
              </Button>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-2xl mb-4">Just For You</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {recommendedProducts.slice(0, window.innerWidth < 640 ? 1 : recommendedProducts.length).map((product, index) => (
                  <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden">
                    <img
                      src={airbuds}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded-t-lg mb-4"
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-700 truncate mb-2">{product.title}</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          i < product.rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />
                        ))}
                      </div>
                      <div className="font-bold text-lg text-gray-900 mb-4">${product.price}</div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button className="flex-1 bg-purple-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-purple-600 transition">
                         <Link to='/addtocart'>
                         See Preview
                         </Link> 
                        </Button>
                        <button className="flex-1 bg-gray-200 text-gray-700 text-sm font-medium py-2 rounded-lg hover:bg-gray-300 transition">
                          Similar Items
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Close button for mobile */}
            <button
              className="md:hidden absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
