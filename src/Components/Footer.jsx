import { FaYoutube, FaInstagram, FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/logo-light.png";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#f81972] to-[#2F155B] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        
        {/* Logo and About Section */}
        <div>
          <img src={logo} alt="Logo" width={150} height={150} className="mb-4 mx-auto sm:mx-0" />
          <p className="text-sm leading-6 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-300  transition-colors duration-300">
              <FaFacebookF className="w-5 h-5 text-[#2F155B]" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-300 transition-colors duration-300">
              <FaInstagram className="w-5 h-5 text-[#2F155B]" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-300 transition-colors duration-300">
              <FaYoutube className="w-5 h-5 text-[#2F155B]" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-300 transition-colors duration-300">
              <FaLinkedin className="w-5 h-5 text-[#2F155B]" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-300 transition-colors duration-300">
              <FaTwitter className="w-5 h-5 text-[#2F155B]" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex justify-evenly lg:gap-10">
          <div>
            <h3 className="font-bold mb-4 text-center sm:text-left">Quick Links</h3>
            <ul className="space-y-2 text-sm text-center sm:text-left">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/authpage" className="hover:underline">Login</a></li>
              <li><a href="/authpage" className="hover:underline">Sign Up</a></li>
            </ul>
          </div>

          {/* Customer Area Section */}
          <div>
            <h3 className="font-bold mb-4 text-center sm:text-left">Customer Area</h3>
            <ul className="space-y-2 text-sm text-center sm:text-left">
              <li><a href="/customerpage" className="hover:underline">My Account</a></li>
              <li><a href="/orders" className="hover:underline">Orders</a></li>
              <li><a href="/tracking" className="hover:underline">Tracking List</a></li>
              <li><a href="/terms" className="hover:underline">Terms</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/addtocart" className="hover:underline">My Cart</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold mb-4 text-center sm:text-left">Contact</h3>
          <p className="text-sm leading-6 mb-4 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex items-center justify-center sm:justify-start gap-5 space-x-2 mb-4">
            <span className="text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1.793-1.793a1 1 0 011.414 0L12 14.586l5.793-5.793a1 1 0 011.414 0L21 10m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8" />
              </svg>
            </span>
            <span className="text-sm">+123 456 789</span>
            <button className="bg-white text-purple-700 px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors duration-300">
              Live Chat
            </button>
          </div>
          <div className="flex justify-center sm:justify-start space-x-4 mt-6">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" width={96} height={32} />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width={96} height={32} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-purple-500 pt-4 text-sm text-right px-7">
        Payment Methods: VISA | MASTERCARD | PAYPAL | BITCOIN
      </div>
    </footer>
  );
};

export default Footer;
