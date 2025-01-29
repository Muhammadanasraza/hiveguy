import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center px-2 min-h-screen  bg-pink-50">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl my-10 px-7 py-6">
        <div className="flex border-b mb-4">
          <button
            className={`flex-1 py-2 text-center font-medium text-lg ${isLogin ? "border-b-2 border-pink-500" : "text-gray-500"
              }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 text-center font-medium text-lg ${!isLogin ? "border-b-2 border-pink-500" : "text-gray-500"
              }`}
            onClick={() => setIsLogin(false)}
          >
            Sign up
          </button>
        </div>

        {isLogin ? (
          <form className="space-y-4 py-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Phone Number or Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div className="text-right">
              <a href="authpage/forgotpage" className="text-sm text-pink-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600"
              style={{ background: "linear-gradient(91.74deg, #F32779 -6.7%, #350662 112.95%)" }}
            >
              Login
            </button>

            <div className="flex items-center mt-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 px-4 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-800">
                Facebook
              </button>
              <button className="flex-1 py-2 px-4 bg-orange-700 text-white rounded-lg shadow-md hover:bg-orange-600">
                Google
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-4 py-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Phone Number or Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label htmlFor="verification" className="block text-sm font-medium text-gray-700">
                Verification Code from WhatsApp
              </label>
              <input
                type="text"
                id="verification"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              />
            </div>

            <div className="flex items-center">
              <input
                id="offers"
                type="checkbox"
                className="h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
              />
              <label htmlFor="offers" className="ml-2 block text-sm text-gray-700">
                I’d like to receive exclusive offers and promotions via SMS
              </label>
            </div>

            <div className="flex space-x-4 mt-6">
              <div className="flex-1">
                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
                  Birthday
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <select
                    id="month"
                    className="mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm"
                  >
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                  </select>
                  <select
                    id="day"
                    className="mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm"
                  >
                    <option>Day</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <select
                    id="year"
                    className="mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm"
                  >
                    <option>Year</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                  </select>
                </div>
              </div>
              <div className="">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  className="mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-white shadow-sm w-full"
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 my-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600"
              style={{ background: "linear-gradient(91.74deg, #F32779 -6.7%, #350662 112.95%)" }}
            >
              Sign up
            </button>

              <p className=" text-center text-[10px] pt-2 text-gray-400">By clicking “SIGN UP”, I agree to HiveGY Terms of Use and Privacy Policy</p>
            <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 px-4 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-800">
                Facebook
              </button>
              <button className="flex-1 py-2 px-4 bg-orange-700 text-white rounded-lg shadow-md hover:bg-orange-600">
                Google
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
