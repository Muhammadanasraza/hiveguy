import { FaYoutube, FaInstagram, FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
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
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-400 transition-colors duration-300">
              <FaFacebookF className="w-5 h-5 text-[#2F155B]" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-400 transition-colors duration-300">
              <FaInstagram className="w-5 h-5 text-[#2F155B]" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-400 transition-colors duration-300">
              <FaYoutube className="w-5 h-5 text-[#2F155B]" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-400 transition-colors duration-300">
              <FaLinkedin className="w-5 h-5 text-[#2F155B]" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-sm bg-[#d6d1d132] hover:bg-yellow-400 transition-colors duration-300">
              <FaTwitter className="w-5 h-5 text-[#2F155B]" />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex justify-evenly lg:gap-10">
          <div>
            <h3 className="font-bold mb-4 text-center sm:text-left">Quick Links</h3>
            <ul className="space-y-2 text-sm text-center sm:text-left">
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
              <li><Link to="/authpage" className="hover:text-gray-300">Login</Link></li>
              <li><Link to="/authpage" className="hover:text-gray-300">Sign Up</Link></li>
            </ul>
          </div>

          {/* Customer Area Section */}
          <div>
            <h3 className="font-bold mb-4 text-center sm:text-left">Customer Area</h3>
            <ul className="space-y-2 text-sm text-center sm:text-left">
              <li><Link to="/customerpage" className="hover:text-gray-300">My Account</Link></li>
              <li><Link to="/orders" className="hover:text-gray-300">Orders</Link></li>
              <li><Link to="/tracking" className="hover:text-gray-300">Tracking List</Link></li>
              <li><Link to="/terms" className="hover:text-gray-300">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link to="/addtocart" className="hover:text-gray-300">My Cart</Link></li>
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

      
<div className="mt-10 max-w-3xl mx-auto pt-4 text-sm max-sm:text-[9px] text-right ">
  <span className="mr-5 ">Payment</span> 
  <Link to="/visa" className="mx-2  ">VISA</Link>  
  <Link to="/mastercard" className="mx-2 ">MASTERCARD</Link>   
  <Link to="/paypal" className="mx-2 ">PAYPAL</Link>   
  <Link to="/bitcoin" className="mx-2 ">BITCOIN</Link>
</div>

    </footer>
  );
};

export default Footer;
