import React, { useState } from "react";
import { IoRadioButtonOff, IoRadioButtonOn } from "react-icons/io5";
import Button from "./button";

const AddresstDialog = ({ isOpen, onClose, addressMethod }) => {
  const [addressType, setAddressType] = useState("home");
  const [addressOption, setAddressOption] = useState("delivery");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#353535f0] flex items-center rounded-lg justify-center p-4">
      <div className="grid grid-cols-1 bg-white  md:grid-cols-2 gap-6 p-6 rounded-lg shadow-lg w-full max-w-3xl">
        
        {/* Heading */}
        <h2 className="col-span-2 text-xl font-semibold rounded-sm bg-gray-200 p-2">Add New Address</h2>
        <div className="">
          <div className="my-3">
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              defaultValue="Pikachu Chopechan"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <label className="block text-sm mb-2">Country</label>
          <input
            type="text"
            defaultValue="United States"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <div className="my-3">
            <label className="block text-sm mb-2">City</label>
            <input
              type="text"
              defaultValue="New York"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="my-3">
            <label className="block text-sm mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="(469) 123-0000"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div>
          <div className="my-3">
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              defaultValue="pikachu@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mt-8">
            <label className="block text-sm mb-2">Select a label for effective delivery:</label>
            <div className="flex gap-4">
              <button
                className={`px-6 py-2 rounded-lg ${
                  addressType === "home" ? "bg-white shadow-sm" : "bg-gray-50"
                }`}
                onClick={() => setAddressType("home")}
              >
                Home
              </button>
              <button
                className={`px-6 py-2 rounded-lg ${
                  addressType === "office" ? "bg-white shadow-sm" : "bg-gray-50"
                }`}
                onClick={() => setAddressType("office")}
              >
                Office
              </button>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm mb-2">Default Address (Optional)</label>
            <div className="space-y-2 shadow-sm p-3 rounded-xl">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="address"
                  checked={addressOption === "delivery"}
                  onChange={() => setAddressOption("delivery")}
                  className="hidden"
                />
                {addressOption === "delivery" ? (
                  <IoRadioButtonOn className="w-5 h-5 text-blue-500" />
                ) : (
                  <IoRadioButtonOff className="w-5 h-5 text-gray-400" />
                )}
                Default delivery address
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="address"
                  checked={addressOption === "billing"}
                  onChange={() => setAddressOption("billing")}
                  className="hidden"
                />
                {addressOption === "billing" ? (
                  <IoRadioButtonOn className="w-5 h-5 text-blue-500" />
                ) : (
                  <IoRadioButtonOff className="w-5 h-5 text-gray-400" />
                )}
                Default billing address
              </label>
              <p className="text-sm text-gray-500 mt-2">
                Your existing default address setting will be replaced if you make some changes here.
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="col-span-2 flex justify-center mt-6">
          <Button
            onClick={onClose}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Save Address
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddresstDialog;
