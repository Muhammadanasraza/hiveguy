import { useState } from "react";
import airbuds from "../../assets/images/airbuds.png";
import Button from "../ui/button";
import logo from '../../assets/images/logo.png'

export default function MyReview() {
    const [activeTab, setActiveTab] = useState("All");

    // Hardcoded orders for each category
    const allOrders = [
        {
            id: "187511387376006",
            date: "27 May 2024 22:59:03",
            product: "i7s Double and i12 Airpods Wireless Bluetooth with Charging Case",
            status: "Cancelled",
            image: airbuds,
        }
    ];


    return (
        <div className="min-h-screen ">
            {/* Tab Buttons */}
            <div className="flex space-x-3 mb-4">
                {["Top Reviews", "History"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-full border ${activeTab === tab ? "bg-pink-700 text-white" : "bg-white text-gray-700"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Dropdown */}


            {/* Orders Sections - Separate Mapping for Each Category */}
            <div className="    p-4">
                {/* All Orders */}
                {activeTab === "Top Reviews" && (
                    <>
                        <div className="max-w-full text-center items-center  mx-auto  rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-300">
                            <div className="shadow-sm py-10 ">
                                <img className="mx-auto pb-2" src={logo} alt="" />
                                <h1 className="pb-5">There are no orders placed yet.</h1>
                                <Button> Continue Shopping</Button>
                            </div>
                        </div>

                    </>
                )}

                {/* To Pay Orders */}
                {activeTab === "History" && (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300">

                            </div>
                )}


            </div>
        </div>
    );
}
