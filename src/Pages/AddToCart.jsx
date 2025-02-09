import { useState } from "react"
import { FiShare2, FiHeart, FiMapPin, FiTruck, FiShield, FiMessageSquare } from "react-icons/fi"
import { FaStar } from "react-icons/fa"
import ProductCard from "../Components/ui/ProductCard"
import ReviewsPage from "../Components/ReveiwCard"
import watch from "../assets/images/watch.png"
import watch2 from "../assets/images/watch2.png"
import watch3 from "../assets/images/watch3.png"
import CartDialog from "../Components/ui/AddToCartDialog"
import AddToCartProduct from "../Components/AddToCartProduct"

export default function AddToCart() {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")

  const products = [
    {
      id: 1,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      Sold: 4000,
      image: watch,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 1,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      Sold: 4000,
      image: watch,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 1,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      Sold: 4000,
      image: watch,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 1,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      Sold: 4000,
      image: watch,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 1,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      Sold: 4000,
      image: watch,
      badges: ["Free Shipping", "COD"],
    },
    {
      id: 1,
      title: "For Original ww38 M47 Wireless Smartwatch",
      price: 2903,
      rating: 4,
      Sold: 4000,
      image: watch,
      badges: ["Free Shipping", "COD"],
    },
  ];

  // carousel image slider
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % thumbnails.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? thumbnails.length - 1 : prevIndex - 1
    );
  };

  const thumbnails = [
    { id: 1, image: watch, alt: "Watch 1" },
    { id: 2, image: watch2, alt: "Watch 2" },
    { id: 3, image: watch3, alt: "Watch 3" },
  ];


  


  return (
    <div className="bg-[#FFF6F6] py-4">
      <div className="max-w-7xl mx-auto p-2   ">
        <div className="grid grid-cols-1 bg-white items-center p-3 rounded-2xl shadow-sm md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product imgs Section */}
          <div className="space-y-4">
            <div className="w-full h-64 flex items-center justify-center  rounded-lg">
              <img
                src={thumbnails[activeIndex].image}
                alt={thumbnails[activeIndex].alt}
                className="w-full h-full object-contain rounded-lg transition-all duration-300"
              />
            </div>

            {/* images carousel  */}
            <div className="flex flex-col items-center w-full max-w-md mx-auto">
              {/* Thumbnail Navigation */}
              <div className="flex items-center gap-2 mt-4">
                {/* Previous Button */}
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  &lt;
                </button>

                {/* Thumbnails */}
                <div className="flex gap-2">
                  {thumbnails.map((thumb, index) => (
                    <div
                      key={thumb.id}
                      className={`border rounded-full p-1 cursor-pointer transition-all ${index === activeIndex
                        ? "border-purple-500 scale-110"
                        : "border-gray-300"
                        }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <img
                        src={thumb.image}
                        alt={thumb.alt}
                        width={50}
                        height={50}
                        className="  p-2"
                      />
                    </div>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  &gt;
                </button>
              </div>
            </div>
            {/* images carousel  */}

          </div>

          {/* Product Details Section */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <h1 className="text-xl font-medium">
                Haylou Solar Pro Sport Smart Watch With Bluetooth Calling & 1.43" AMOLED Display
              </h1>
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <FiShare2 className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <FiHeart className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-yellow-400" />
              ))}
              <span className="text-sm text-gray-600">5 Ratings | 2 Answered Questions</span>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold">GYD. 9,199</div>
              <div className="text-sm text-gray-500">
                <span className="line-through">GYD. 13,999</span>
                <span className="ml-2 text-red-500">-34%</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-2">Color Family</div>
                <div className="flex gap-2">
                  <button
                    className={`w-8 h-8 rounded-full bg-gray-900 ${selectedColor === "black" ? "ring-2 ring-blue-500 ring-offset-2" : ""
                      }`}
                    onClick={() => setSelectedColor("black")}
                  />
                  <button
                    className={`w-8 h-8 rounded-full bg-gray-400 ${selectedColor === "silver" ? "ring-2 ring-blue-500 ring-offset-2" : ""
                      }`}
                    onClick={() => setSelectedColor("silver")}
                  />
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">Quantity</div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-1 border rounded-md"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-16 text-center border rounded-md py-1"
                  />
                  <button className="px-3 py-1 border rounded-md" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex-1 bg-gray-500 text-white py-3 rounded-md hover:bg-gray-600">Buy Now</button>
              <CartDialog /> {/* Replaced Button with CartDialog */}
            </div>
          </div>

          {/* Delivery and Service Section */}
          <div className="bg-pink-50 p-4 rounded-lg space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="font-medium">Delivery</h3>
                <button className="text-pink-500 text-sm">CHANGE</button>
              </div>
              <div className="flex items-start gap-2">
                <FiMapPin className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <div className="text-sm">W-15 McKenzie Wharf,</div>
                  <div className="text-sm">Linden, Guyana</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FiTruck className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <div className="font-medium">Standard Delivery</div>
                  <div className="text-sm text-gray-600">1 May - 5 May</div>
                  <div className="text-sm text-gray-600">GYD. 125</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Service</h3>
              <div className="flex items-start gap-2">
                <FiShield className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <div className="text-sm font-medium">14 days free & easy return</div>
                  <div className="text-sm text-gray-600">Change of mind is not applicable</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Sold by</h3>
              <div className="flex items-center justify-between">
                <div>MoboPro (Linden)</div>
                <button className="flex items-center gap-1 text-pink-500">
                  <FiMessageSquare className="w-4 h-4" />
                  <span className="text-sm">CHAT</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-medium">90%</div>
                  <div className="text-xs text-gray-600">Positive Seller Ratings</div>
                </div>
                <div>
                  <div className="font-medium">98%</div>
                  <div className="text-xs text-gray-600">Ship on Time</div>
                </div>
                <div>
                  <div className="font-medium">95%</div>
                  <div className="text-xs text-gray-600">Chat Response Rate</div>
                </div>
              </div>
              <button className="w-full text-pink-500 text-sm text-center">Visit Store</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ReviewsPage />

            <div className="space-y-4">
              <h2 className="  text-xl font-bold">Best Seller watches</h2>
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
          <div className="">
            <AddToCartProduct />
          </div>
        </div>
      </div>
    </div>
  )
}

