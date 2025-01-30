import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const AddressCard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [address, setAddress] = useState({
        name: "Cheddi Jagan12",
        phone: "(469) 123-0000",
        location: "Linden-Lethem Rd, Guyana",
    });
    const [editableAddress, setEditableAddress] = useState({ ...address });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setAddress(editableAddress);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableAddress({ ...editableAddress, [name]: value });
    };

    const handleCancelClick = () => {
        setEditableAddress(address);
        setIsEditing(false);
    };

    return (
        <div className=" mx-auto  p-2 rounded-2xl ">
            {isEditing ? (
                <div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={editableAddress.name}
                            onChange={handleChange}
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={editableAddress.phone}
                            onChange={handleChange}
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={editableAddress.location}
                            onChange={handleChange}
                            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handleSaveClick}
                            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={handleCancelClick}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex  items-center justify-between">
                        <div className="text-lg p-2 font-semibold">{address.name}</div>
                        <FiEdit2
                            className="text-gray-600 cursor-pointer hover:text-pink-500"
                            size={20}
                            onClick={handleEditClick}
                        />
                    </div>
                    <div className="text-sm p-2 font-semibold text-gray-600">{address.phone}</div>
                    <div className="text-sm p-2 font-semibold text-gray-600 mb-4">{address.location}</div>
                </div>
            )}
            <div className="mt-4 flex text-gray-400 text-sm gap-4">
                <span className="text-pink-500  ">HOME</span>

                <span>DEFAULT DELIVERY ADDRESS</span>
                <span>DEFAULT BILLING ADDRESS</span>
            </div>
        </div>
    );
};

export default AddressCard;
