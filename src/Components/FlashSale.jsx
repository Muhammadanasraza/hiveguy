import React from "react";
import laptop from '../assets/images/laptop.png'
import Button from "./ui/button";
import ProductCard from "./ui/ProductCard";
const FlashSale = () => {
    return (
        <div className="flex flex-col  md:flex-row gap-2 px-3 py-10">
            {/* Flash Sale Section */}
            <div className="w-full md:w-2/5 bg-white shadow-md rounded-lg ">
                <h2 className="text-white p-3 bg-gradient-to-r from-[#F81972] to-[#2F155B] font-bold text-2xl mb-4">Flash Sale</h2>
                <div className="px-6">

               
                {/* Images */}
                <div className="flex justify-lefet gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <img
                            key={i}
                            src={laptop}
                            alt={`product-thumbnail-${i}`}
                            className="w-12 h-12 border bg-[#D9D9D9] border-gray-300 p-2 rounded-full cursor-pointer"
                        />
                    ))}
                </div>
                {/* Product Details */}
                <div className="text-center ">
                    <div className="flex gap-2">

                        <h3 className="text-xl font-bold text-gray-800">$425.89</h3>
                        <span className="text-gray-500 line-through">$425.89</span>
                    </div>
                    <p className="mt-2 text-left font-bold text-gray-700">Tablet Red EliteBook Revolve</p>
                </div>
                {/* Image */}
                <div className="flex justify-center my-4">
                    <img
                        src={laptop}
                        alt="Tablet Red EliteBook Revolve"
                        className="w-50 h-50 object-contain"
                    />
                </div>
                {/* Countdown Timer */}
                <div className="text-center mb-4 flex justify-between">
                    <div className="text-left">

                        <h4 className="text-orange-600 font-bold">Hurry up!</h4>
                        <p className="text-gray-600">Offer ends in</p>
                    </div>
                    <div className="flex justify-center space-x-4 mt-2">
                        {["Days", "Hours", "Min", "Sec"].map((label) => (
                            <div key={label} className="text-center">
                                <p className="text-xl font-bold text-gray-800">00</p>
                                <span className="text-sm text-gray-500">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Buttons */}
                <div className="flex justify-between">
                    <button className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700">
                        Previous deal
                    </button>
                    <Button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                        Next deal
                    </Button>
                </div>
                </div>
            </div>

            {/* Product Cards Section */}
            <div className="w-full md:w-3/5">
                {/* Tabs */}
                <div className="flex justify-end border-b border-gray-300 mb-4">
                    {["Featured", "On Sale", "Top Rated"].map((tab) => (
                        <button
                            key={tab}
                            className="px-4 py-2 text-gray-700 font-semibold border-b-2 border-transparent hover:border-purple-600"
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* Products */}
                <div className="grid  ml-15 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-2">
                    {[...Array(6)].map((_, i) => (
                       <ProductCard key={i}/>
                    ))}
                </div>
                {/* View All Button */}
                <div className="flex justify-center mt-6">
                    <Button className="px-6 py-2 text-white rounded-lg">
                        View All
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;
