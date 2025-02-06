import React from "react";
import airbuds from "../assets/images/airbuds.png";
import Button from "./ui/button";
import { FaRegStar, FaStar } from "react-icons/fa";

const JustForYou = () => {
    const products = [
        {
            image: "https://via.placeholder.com/150", // Replace with actual image URLs
            title: "Silicone Soft Bluetooth Earphone Case",
            price: "PKR 2,903",
            sold: "4,000+ sold",
            rating: 3
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Silicone Soft Bluetooth Earphone Case",
            price: "PKR 2,903",
            sold: "4,000+ sold",
            rating: 3
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Silicone Soft Bluetooth Earphone Case",
            price: "PKR 2,903",
            sold: "4,000+ sold",
            rating: 3
        },
        {
            image: "https://via.placeholder.com/150",
            title: "Silicone Soft Bluetooth Earphone Case",
            price: "PKR 2,903",
            sold: "4,000+ sold",
            rating: 3
        },
    ];

    return (
        <div className="my-5 max-w-7xl mx-auto">
            <h2 className="text-3xl pl-3 font-bold text-left mb-6">Just For You</h2>
            <div className="grid grid-cols-1  p-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-white shadow-md rounded-2xl">
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
                            <div className="text-xs text-gray-500 mb-2">{product.sold}</div>
                            <div className="font-bold text-lg text-gray-900 mb-4">{product.price}</div>
                            <div className="flex justify-between gap-2">
                                <Button className="w-1/2 bg-purple-500 text-white text-sm font-medium py-2 rounded-lg hover:bg-purple-600 transition">
                                    See Preview
                                </Button>
                                <button className="w-1/2 bg-gray-200 text-gray-700 text-sm font-medium py-2 rounded-lg hover:bg-gray-300 transition">
                                    Similar Items
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center my-20">
                <Button className="rounded-full px-6 py-3 bg-purple-500 text-white font-medium text-sm hover:bg-purple-600 transition">
                    Show More
                </Button>
            </div>
        </div>
    );
};

export default JustForYou;
