
import { useState } from "react"
import ProductCard from "../Components/ui/ProductCard"
import SidebarFilter from "../Components/SidebarFilter"
import ProductCardList from "../Components/ui/ProductCardList"
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import watch from '../assets/images/watch.png'


const products = [
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description:
            "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description:
            "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description:
            "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description:
            "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description:
            "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description:
            "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description:
            "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description:
            "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description:
            "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
        {
            id: 1,
            title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
            price: 2903,
            rating: 4,
            reviews: 4000,
            image: watch,
            badges: ["Free Shipping", "COD"],
            description:
                "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        },
    // Add more products as needed
]


export default function ProductListingPage() {
    const [viewMode, setViewMode] = useState("grid")

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-2">
                    <div className="flex items-center gap-2 text-sm">
                        <a href="/" className="text-blue-600 hover:underline">
                            Home
                        </a>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">Search Results</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex gap-6">
                    {/* Sidebar */}
                    <SidebarFilter />

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Sort and View Options */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-sm text-gray-600">Sort By: View: 1,836 items found for "watch gt4 pro"</div>
                            <div className="flex items-center gap-4">
                                <select className="text-sm border rounded-md px-2 py-1">
                                    <option>Best Match</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                                <div className="flex items-center gap-2">
                                    <button
                                        className={`p-1 rounded ${viewMode === "grid" ? "bg-gray-100" : "hover:bg-gray-100"}`}
                                        onClick={() => setViewMode("grid")}
                                    >
                                        <IoGrid className="w-5 h-5" />
                                    </button>
                                    <button
                                        className={`p-1 rounded ${viewMode === "list" ? "bg-gray-100" : "hover:bg-gray-100"}`}
                                        onClick={() => setViewMode("list")}
                                    >
                                        <FaListUl className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid/List */}
                        {viewMode === "grid" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {products.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {products.map((product) => (
                                    <ProductCardList key={product.id} {...product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

