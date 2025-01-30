import React, { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import Button from "../ui/button";

export default function MyProfile() {
  const [profile, setProfile] = useState({
    fullName: "Cheddi Jagan12",
    email: "CheddiJagan12@gmail.com",
    mobile: "",
    birthday: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        <div>
          <label className="block py-2 text-gray-600">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2 border focus:outline-none focus:ring focus:ring-pink-300"
          />
        </div>
        <div>
          <label className="block p-2 text-gray-600">Email Address</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full bg-gray-200 border-gray-300 rounded-lg p-2 border focus:outline-none focus:ring focus:ring-pink-300"
            />
            <button className="absolute right-2 top-2 text-pink-500">
              <FaEdit />
            </button>
          </div>
        </div>
        <div>
          <label className="block p-2 text-gray-600">Mobile</label>
          <div className="relative">
            <input
              type="text"
              name="mobile"
              value={profile.mobile}
              onChange={handleChange}
              placeholder="Please enter your mobile"
              className="w-full bg-gray-200 border-gray-300 rounded-lg p-2 border focus:outline-none focus:ring focus:ring-pink-300"
            />
            <button className="absolute right-2 top-2 text-pink-500">
              <FaPlus />
            </button>
          </div>
        </div>
        <div>
          <label className="block p-2 text-gray-600">Birthday</label>
          <input
            type="date"
            name="birthday"
            value={profile.birthday}
            onChange={handleChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2 border focus:outline-none focus:ring focus:ring-pink-300"
          />
        </div>
        <div>
          <label className="block p-2 text-gray-600">Gender</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            className="w-full bg-gray-200 border-gray-300 rounded-lg p-2 border focus:outline-none focus:ring focus:ring-pink-300"
          >
            <option value="" disabled>
              Please select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <hr className="my-6" />

      <div className="text-center py-10">
        <p className="text-pink-500 text-left pb-5">Subscribe to our Newsletter</p>
        <div className="flex justify-items-start gap-4 mt-4">
          <Button className=" text-white py-2 px-6 w-full  rounded-lg shadow-lg hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-pink-300">
            EDIT PROFILE
          </Button>
          <button className="bg-gray-800 text-white py-2 px-6 w-full rounded-lg shadow-lg hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
