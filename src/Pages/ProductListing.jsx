"use client"

import { useState } from "react"
import ProductCard from "../Components/ui/ProductCard"
import SidebarFilter from "../Components/SidebarFilter"
import ProductCardList from "../Components/ui/ProductCardList"
import { IoGrid } from "react-icons/io5"
import { FaListUl } from "react-icons/fa6"
import Pagination from "../Components/Pagination"
import watch from '../assets/images/watch.png'

const products = [
    // ... (your product data remains unchanged)
    {
        id: 1,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 2,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 3,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 4,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 5,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 6,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 7,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 8,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 9,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 10,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 11,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 12,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 13,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
    {
        id: 14,
        title: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
        price: 2903,
        rating: 4,
        reviews: 4000,
        image: watch,
        badges: ["Free Shipping", "COD"],
        description: "Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock. Sports Digital Fashion Watch Women Men Square LED Watch Silicone Electronic Watch Women's Watches Clock",
    },
]

const ITEMS_PER_PAGE = 10 // Adjust this value based on how many items you want per page

export default function ProductListingPage() {
    const [viewMode, setViewMode] = useState("grid")
    const [currentPage, setCurrentPage] = useState(1)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentProducts = products.slice(startIndex, endIndex)

    const handlePageChange = (page) => {
        setCurrentPage(page)
        window.scrollTo(0, 0) // Scroll to top when page changes
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="min-h-screen bg-[#FFF6F6]">
            {/* Breadcrumb */}
            <div className="border-b w-full mx-auto">
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

            <div className="max-w-7xl mx-auto px-4 py-1">
                <div className="flex flex-col lg:flex-row gap-2">
                    {/* Sidebar Toggle for Mobile */}
                    <button className="lg:hidden mb-4 px-4 py-2 bg-gray-200 rounded-md" onClick={toggleSidebar}>
                        {isSidebarOpen ? "Close Filters" : "Open Filters"}
                    </button>

                    {/* Sidebar */}
                    <div className={`lg:w-1/4.5 ${isSidebarOpen ? "block" : "hidden lg:block"}`}>
                        <SidebarFilter />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 py-4">
                        {/* Sort and View Options */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                            <div className="text-sm text-gray-600">View: 1,836 items found for "watch gt4 pro"</div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <select className="text-sm border rounded-md px-2 py-1 w-full sm:w-auto">
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
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {currentProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {currentProducts.map((product) => (
                                    <ProductCardList key={product.id} {...product} />
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="mt-8">
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

