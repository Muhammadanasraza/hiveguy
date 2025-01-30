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

  // Determine which orders to display based on active tab
  let displayedOrders = [];
  if (activeTab === "All") displayedOrders = allOrders;
  else if (activeTab === "To Pay") displayedOrders = toPayOrders;
  else if (activeTab === "To Ship") displayedOrders = toShipOrders;
  else if (activeTab === "To Receive") displayedOrders = toReceiveOrders;

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Tab Buttons */}
      <div className="flex space-x-3 mb-4">
        {["All", "To Pay", "To Ship", "To Receive"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border ${
              activeTab === tab ? "bg-pink-700 text-white" : "bg-white text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dropdown */}
      <div className="mb-6 flex gap-5 p-2 rounded-sm shadow-sm items-center">
        <label className="font-semibold">Show:</label>
        <select className="bg-gray-200 rounded-md px-3 py-1">
          <option>All Orders</option>
        </select>
      </div>

      {/* Orders List */}
      <div className="rounded-lg shadow-md bg-white p-4">
        {displayedOrders.length > 0 ? (
          displayedOrders.map((order) => (
            <div key={order.id} className="rounded-lg p-4 space-x-4">
              {/* Order Header */}
              <div className="flex justify-between gap-4 py-6 border-b">
                <div>
                  Order <span className="text-pink-600">#{order.id}</span>
                  <p className="text-sm text-gray-500">Placed on {order.date}</p>
                </div>
                <p className="bg-gray-300 text-gray-700 px-3 py-1 rounded">{order.status}</p>
              </div>

              {/* Order Details */}
              <div className="flex justify-between gap-10 pt-5 items-center">
                <img src={order.image} alt="Product" className="w-16 h-16 rounded" />
                <p className="text-gray-800 mt-2">{order.product}</p>
                <p className="text-gray-700 mt-1">Qty: 1</p>
                <Button className="text-white px-4 py-2 rounded-full">Manage</Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No orders available.</p>
        )}
      </div>
    </div>
  );
}
