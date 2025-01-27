import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#f81972] to-[#2F155B] text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and About Section */}
        <div>
          <img src="" alt="Logo" className="mb-4 w-16 mx-auto sm:mx-0" />
          <p className="text-sm leading-6 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <a href="#" className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50">
              <img
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/facebook.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>
            <a href="#" className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50">
              <img
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/instagram.svg"
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>
            <a href="#" className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50">
              <img
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/youtube.svg"
                alt="YouTube"
                className="w-5 h-5"
              />
            </a>
            <a href="#" className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50">
              <img
                src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/twitter.svg"
                alt="Twitter"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold mb-4 text-center sm:text-left">Quick Links</h3>
          <ul className="space-y-2 text-sm text-center sm:text-left">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Area Section */}
        <div>
          <h3 className="font-bold mb-4 text-center sm:text-left">Customer Area</h3>
          <ul className="space-y-2 text-sm text-center sm:text-left">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tracking List
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                My Cart
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold mb-4 text-center sm:text-left">Contact</h3>
          <p className="text-sm leading-6 mb-4 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-5 space-x-2 mb-4">
            <span className="text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l1.793-1.793a1 1 0 011.414 0L12 14.586l5.793-5.793a1 1 0 011.414 0L21 10m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8"
                />
              </svg>
            </span>
            <span className="text-sm">+123 456 789</span>
            <button className="bg-white text-purple-700 px-4 py-2 rounded-md font-semibold hover:bg-opacity-90">
              Live Chat
            </button>
          </div>
          <div className="flex justify-center sm:justify-start space-x-4 mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="w-24"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-24"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 border-purple-500 pt-4 text-sm text-center sm:text-right px-7">
        Payment Methods: VASI | MASTERCARD | PAYPAL | BITCOIN
      </div>
    </footer>
  );
};

export default Footer;
