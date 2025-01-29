import React from "react";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center px-3 min-h-screen bg-gray-100">
      <div className="bg-white px-2 py-7 rounded-2xl shadow-lg w-xl">
        <a href="/authpage" className="text-gray-500 mb-4 flex items-center">
          &larr; Go back
        </a>
        <div className="px-5">

        
        <h2 className="text-xl font-bold text-center mb-2">Forgot your password?</h2>
        <p className="text-gray-600 text-center mb-12 text-sm">
          Enter your email address below and we’ll send you a link to reset your password
        </p>
        <label className="block text-gray-700 font-medium mb-2">Phone Number or Email</label>
        <input
          type="text"
          placeholder="Please enter your Phone Number or Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:opacity-90 transition">
          Continue
        </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
