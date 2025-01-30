import { useState } from "react";
import airbuds from "../../assets/images/airbuds.png";
import Button from "../ui/button";
import heart from '../../assets/images/heart.png'
import shop from '../../assets/images/shop.png'

export default function MyWishList() {
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
                {["My WishList", "Past Parchases", "Followed Stores"].map((tab) => (
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
                {activeTab === "My WishList" && (
                    <>
                        <div className="mb-6 flex gap-5 p-2 rounded-sm shadow-sm items-center">
                                <button className="bg-gray-300 p-2 px-5  rounded-2xl">Add All Carts</button>
                        </div>
                        {allOrders.map((order) => (
                            <div className="shadow-sm p-2 rounded-2xl text-center mx-auto">
                                <div className="py-10 ">
                                    <img className="mx-auto pb-2" src={heart} alt="" />
                                    <h1 className="  text-gray-500">There are no favorites yet..</h1>
                                    <p className="text-gray-500 pb-5">Add your favorites to wishlist and they will show here.</p>
                                    <Button> Continue Shopping</Button>
                                </div>
                            </ div>
                        ))}
                    </>
                )}

                {/* To Pay Orders */}
                {activeTab === "Past Parchases" && (
                    <>
                        <div className="mb-6 flex gap-5 p-2 rounded-sm shadow-sm items-center">
                        <button className="bg-gray-300 p-2 px-5  rounded-2xl">Add All Carts</button>
                        </div>
                        {allOrders.map((order) => (
                            <div className="shadow-sm p-2 rounded-2xl text-center mx-auto">
                                <div className="py-10 ">
                                    <img className="mx-auto pb-2" src={heart} alt="" />
                                    <h1 className="  text-gray-500">There are no favorites yet..</h1>
                                    <p className="text-gray-500 pb-5">Add your favorites to wishlist and they will show here.</p>
                                    <Button> Continue Shopping</Button>
                                </div>
                            </ div>
                        ))}
                    </>
                )}

                {/* To Ship Orders */}
                {activeTab === "Followed Stores" && (
                    <>
                        <div className="max-w-full text-center items-center  rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-300">
                            <div className="shadow-sm py-10 mx-auto ">
                                <img className="text-center mx-auto" src={shop} alt="" />
                                <h1 className="pt-5">There are no orders placed yet.</h1>
                            </div>
                        </div>
                    </>
                )}


            </div>
        </div>
    );
}
