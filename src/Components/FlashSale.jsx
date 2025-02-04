import { useState } from "react"
import Button from "./ui/button"
import laptop from "../assets/images/laptop.png"
import airbuds from "../assets/images/airbuds.png"

const FlashSale = () => {
    const [activeTab, setActiveTab] = useState("Featured")

    const renderProducts = () => {
        // You can customize this function to render different products based on the activeTab
        return [...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-3 mx-auto shadow-md w-full max-w-[280px] h-[270px]">
                <img
                    src={airbuds || "/placeholder.svg"}
                    alt="Product img"
                    className="w-full h-[140px] rounded-md object-cover"
                />
                <div className="mt-3">
                    <h3 className="text-[11px] font-light leading-[17px] text-left font-poppins">
                        NERV Watch 2 Pro - 2.01" Amoled Display SmartWatch
                    </h3>
                    <div className="flex items-center mt-1">
                        <span className="text-[11px] font-medium leading-[17px] text-left font-poppins">GYD</span>
                        <span className="text-sm font-bold ml-2">2,903</span>
                        <span className="line-through text-gray-500 ml-2">GYD2,903</span>
                        <span className="text-red-500 ml-1">-75%</span>
                    </div>
                    <div className="w-full max-w-[180px] h-[7px] bg-gray-200 rounded-lg mt-2">
                        <div className="bg-blue-600 h-[6px] rounded-lg" style={{ width: "75%" }}></div>
                    </div>
                    <p className="text-red-500 text-xs mt-2">100 in Stocks</p>
                </div>
            </div>
        ))
    }

    return (
        <div className="flex flex-col lg:flex-row mt-10 mx-4 rounded-4xl bg-white gap-4 px-3 py-10">
            {/* Flash Sale Section */}
            <div className="w-full lg:w-2/5 bg-white shadow-md rounded-lg">
                <h2 className="text-white p-3 bg-gradient-to-r from-[#F81972] to-[#2F155B] font-bold text-2xl mb-4">
                    Flash Sale
                </h2>
                <div className="px-4 lg:px-6">
                    {/* Images */}
                    <div className="flex justify-start gap-2 mb-4 overflow-x-auto scrollbar-hide">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={laptop || "/placeholder.svg"}
                                alt={`product-thumbnail-${i}`}
                                className="w-12 h-12 border bg-[#D9D9D9] border-gray-300 p-2 rounded-full cursor-pointer"
                            />
                        ))}
                    </div>
                    {/* Product Details */}
                    <div className="text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start gap-2">
                            <h3 className="text-xl font-bold text-gray-800">$425.89</h3>
                            <span className="text-gray-500 line-through">$499.99</span>
                        </div>
                        <p className="mt-2 font-bold text-gray-700">Tablet Red EliteBook Revolve</p>
                    </div>
                    {/* Image */}
                    <div className="flex justify-center my-4">
                        <img
                            src={laptop || "/placeholder.svg"}
                            alt="Tablet Red EliteBook Revolve"
                            className="w-80 h-80 object-contain"
                        />
                    </div>
                    {/* Countdown Timer */}
                    <div className="text-center mb-5 flex flex-col lg:flex-row items-center justify-between">
                        <div>
                            <h4 className="text-orange-600 font-bold">Hurry up!</h4>
                            <p className="text-gray-600">Offer ends in</p>
                        </div>
                        <div className="flex justify-center space-x-4 mt-2 lg:mt-0">
                            {["Days", "Hours", "Min", "Sec"].map((label) => (
                                <div key={label} className="text-center">
                                    <p className="text-xl font-bold text-gray-800">00</p>
                                    <span className="text-sm text-gray-500">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex flex-col pb-4 sm:flex-row gap-4 justify-between">
                        <button className="px-6 py-2 bg-gray-200 text-gray-700 text-sm font-medium  rounded-lg hover:bg-gray-300 transition">
                         Previous deal
                        </button>
                        <Button className="w-full sm:w-auto">Next deal</Button>
                    </div>
                </div>
            </div>

            {/* Product Cards Section */}
            <div className="w-full lg:w-3/5">
                {/* Tabs */}
                <div className="flex justify-between lg:justify-end border-b border-gray-300 mb-4 overflow-x-auto scrollbar-hide">
                    {["Featured", "On Sale", "Top Rated"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 text-gray-700 font-semibold border-b-2 ${activeTab === tab ? "border-purple-600" : "border-transparent"
                                } hover:border-purple-600 transition-colors duration-200`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* Products */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{renderProducts()}</div>
                {/* View All Button */}
                <div className="flex justify-center mt-6">
                    <Button className="w-full sm:w-auto">View All</Button>
                </div>
            </div>
        </div>
    )
}

export default FlashSale

