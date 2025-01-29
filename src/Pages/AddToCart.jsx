
import { useState } from "react"
import { FiShare2, FiHeart, FiMapPin, FiTruck, FiShield, FiMessageSquare } from "react-icons/fi"
import { FaStar } from "react-icons/fa"
import ProductCard from "../Components/ui/ProductCard"
import ReviewsPage from "../Components/ReveiwCard"
import watch from "../assets/images/watch.png";
import AddToCartProduct from "../Components/AddToCartProduct"

export default function AddToCart() {
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState("black");

    const products = [
        {
            id: 1,
            title: "For Original ww38 M47 Wireless Smartwatch",
            price: 2903,
            rating: 4,
            Sold: 4000,
            image: watch,
            badges: ["Free Shipping", "COD"],
        }
    ]

    const thumbnails = [
        {
            id: 1,
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20194729-Tek973i83VvK0TruLhTEqE0NTVqIMU.png",
            alt: "Watch front view",
        },
        {
            id: 2,
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20194729-Tek973i83VvK0TruLhTEqE0NTVqIMU.png",
            alt: "Watch side view",
        },
        {
            id: 3,
            src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20194729-Tek973i83VvK0TruLhTEqE0NTVqIMU.png",
            alt: "Watch back view",
        },
    ]

    return (
        <div className="max-w-7xl mx-auto p-2 border my-5 ">
            <div className="grid grid-cols-1  p-3 rounded-2xl shadow-sm md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Product imgs Section */}
                <div className="space-y-4">
                    <div className="border border-blue-500 rounded-lg p-2">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20194729-Tek973i83VvK0TruLhTEqE0NTVqIMU.png"
                            alt="Haylou Solar Pro Sport Smart Watch"
                            width={400}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full bg-gray-100">&lt;</button>
                        {thumbnails.map((thumb) => (
                            <div key={thumb.id} className="border rounded-lg p-1 cursor-pointer hover:border-blue-500">
                                <img
                                    src={thumb.src || "/placeholder.svg"}
                                    alt={thumb.alt}
                                    width={60}
                                    height={60}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                        <button className="p-2 rounded-full bg-gray-100">&gt;</button>
                    </div>
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
                                <button className="px-3 py-1 border rounded-md" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
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
                        <button className="flex-1 bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700">Add to Cart</button>
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
                    <AddToCartProduct/>
                </div>

            </div>

        </div>
    )
}

