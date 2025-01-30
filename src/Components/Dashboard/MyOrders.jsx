import { useState } from "react";
import airbuds from "../../assets/images/airbuds.png";
import Button from "../ui/button";

export default function MyOrders() {
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

    const toPayOrders = [
        {
            id: "187511387376010",
            date: "01 June 2024 12:15:00",
            product: "Wireless Bluetooth Earbuds with Charging Dock",
            status: "To Pay",
            image: airbuds,
        },
    ];

    const toShipOrders = [
        {
            id: "187511387376011",
            date: "02 June 2024 14:00:00",
            product: "Sports Earbuds with Water Resistance - Green",
            status: "To Ship",
            image: airbuds,
        },
    ];

    const toReceiveOrders = [
        {
            id: "187511387376012",
            date: "03 June 2024 09:30:00",
            product: "Studio Headphones for Professional Audio - Blue",
            status: "To Receive",
            image: airbuds,
        },
    ];

    return (
        <div className="min-h-screen ">
            {/* Tab Buttons */}
            <div className="flex space-x-3 mb-4">
                {["All", "To Pay", "To Ship", "To Receive"].map((tab) => (
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
                {activeTab === "All" && (
                    <>
                        <div className="mb-6 flex gap-5 p-2 rounded-sm shadow-sm items-center">
                            <label className="font-semibold">Show:</label>
                            <select className="bg-gray-200 rounded-md px-3 py-1">
                                <option>All Orders</option>
                            </select>
                        </div>
                        {allOrders.map((order) => (
                            <div className="shadow-sm p-2 rounded-2xl">
                                <div className="flex justify-between  py-2 border-b">
                                    <div className="p-3 ">
                                        Order <span className="text-pink-600">#{order.id}</span>
                                        <p className="text-sm text-gray-500">Placed on {order.date}</p>
                                    </div>
                                    <div className="items-center flex">

                                        <Button className="text-white px-4 py-2 rounded-full">Manage</Button>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-10 p-5  items-center">
                                    <img src={order.image} alt="Product" className="w-16 h-16 rounded" />
                                    <p className="text-gray-800 mt-2">{order.product}</p>
                                    <p className="text-gray-700 mt-1">Qty: 1</p>
                                    <button className="bg-gray-300 text-gray-700 px-3  rounded">{order.status}</button>
                                </div>
                            </ div>
                        ))}
                    </>
                )}

                {/* To Pay Orders */}
                {activeTab === "To Pay" && (
                    <>
                        <h2 className="text-lg font-bold mb-2">To Pay</h2>
                        {toPayOrders.map((order) => (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300">
                                <h1>a</h1>
                            </div>
                        ))}
                    </>
                )}

                {/* To Ship Orders */}
                {activeTab === "To Ship" && (
                    <>
                        {toShipOrders.map((order) => (
                            <div className="max-w-full text-center items-center  rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-300">
                                <div className="shadow-sm py-10">
                                    <h1 className="pb-5">There are no orders placed yet.</h1>
                                    <Button> Continue Shopping</Button>
                                </div>
                            </div>
                        ))}
                    </>
                )}

                {/* To Receive Orders */}
                {activeTab === "To Receive" && (
                    <>
                        {toReceiveOrders.map((order) => (
                            <div className="max-w-full text-center items-center  rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-300">
                                <div className="shadow-sm py-10">
                                    <h1 className="pb-5">There are no orders placed yet.</h1>
                                    <Button> Continue Shopping</Button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}
