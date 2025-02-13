
import rowimage from "../assets/images/rowimage.png"
import rowimage2 from "../assets/images/rowimage2.png"
import { useState } from "react"
import { FaStar, FaThumbsUp, FaComment, FaChevronLeft, FaChevronRight } from "react-icons/fa"

// Sample data (you would typically fetch this from an API)
const ratingData = {
    average: 4.8,
    distribution: [
        { stars: 5, percentage: 80 },
        { stars: 4, percentage: 15 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 },
    ],
}

const reviews = [
    {
        id: 1,
        name: "Pablo Kathandra",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        rating: 5,
        content:
            "The product exceeded my expectations! The build quality is solid, and it works perfectly. Delivery was quick, and the packaging was secure. Highly recommended!",
        reply:
            "Thank you for your kind words! We’re delighted that you're happy with your purchase. Have a great day! Regards, MoboPro.",
        likes: 25,
        comments: 12,
    },
    {
        id: 2,
        name: "Samantha Lee",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        rating: 4,
        content:
            "Good product overall. However, the delivery took longer than expected. The customer support team was responsive, which I appreciate.",
        reply:
            "We apologize for the delay, and we appreciate your patience. We’re glad you’re satisfied with the product! Regards, MoboPro.",
        likes: 14,
        comments: 7,
    },
    {
        id: 3,
        name: "Rajesh Kumar",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        rating: 3,
        content:
            "The product is decent but could be improved. The material feels a bit flimsy, though it functions as described.",
        reply:
            "Thank you for your feedback! We’ll work on improving the quality based on your input. Regards, MoboPro.",
        likes: 9,
        comments: 5,
    },
    {
        id: 4,
        name: "Linda Johnson",
        image: "https://randomuser.me/api/portraits/men/20.jpg",
        rating: 5,
        content:
            "Absolutely love it! The design is sleek, and the performance is outstanding. Worth every penny!",
        reply:
            "Thank you for your wonderful review! We appreciate your support. Enjoy your purchase! Regards, MoboPro.",
        likes: 30,
        comments: 15,
    },
    {
        id: 5,
        name: "Michael Smith",
        image: "https://randomuser.me/api/portraits/men/20.jpg",
        rating: 2,
        content:
            "Not satisfied with the product. It arrived with some scratches, and the packaging was slightly damaged.",
        reply:
            "We’re sorry to hear about your experience. Please reach out to our support team, and we’ll resolve this issue for you. Regards, MoboPro.",
        likes: 5,
        comments: 3,
    },
    {
        id: 6,
        name: "Aisha Al-Masri",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        rating: 5,
        content:
            "Great experience! Fast delivery, excellent quality, and smooth functionality. Will definitely buy again.",
        reply:
            "We're thrilled to hear that! Thank you for your support, and we look forward to serving you again. Regards, MoboPro.",
        likes: 18,
        comments: 9,
    },
];


const ITEMS_PER_PAGE = 1



const bestSellers = [
    {
        id: 1,
        name: "For Original ww.BL M47 Wireless...",
        price: 2903,
        originalPrice: 3500,
        rating: 5,
        reviews: 4000,
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20195546-xsX9vh5cWUHihZuqLw9BQVpdgi6UOS.png",
    },
    {
        id: 2,
        name: "For Original ww.BL M47 Wireless...",
        price: 2903,
        originalPrice: 3500,
        rating: 5,
        reviews: 4000,
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-29%20195546-xsX9vh5cWUHihZuqLw9BQVpdgi6UOS.png",
    },
]

export default function ReviewsPage() {

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentReviews = reviews.slice(startIndex, endIndex)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }


    return (
        <div className="lg:col-span-2">
            <div className="bg-pink-200 rounded-t-lg p-4">
                <h2 className="font-semibold text-lg">Ratings & Reviews</h2>
            </div>

            <div className="bg-white rounded-b-lg shadow-sm p-6">
                {/* Rating Summary */}
                <div className="flex gap-8 border-b pb-6">
                    <div className="relative w-32 h-32">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-3xl font-bold">{ratingData.average}</div>
                                <div className="text-sm text-gray-500">Excellent</div>
                            </div>
                        </div>
                        <svg className="w-full h-full -rotate-90">
                            <circle cx="60" cy="60" r="54" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                            <circle
                                cx="60"
                                cy="60"
                                r="54"
                                fill="none"
                                stroke="#FF6B00"
                                strokeWidth="12"
                                strokeDasharray={`${(ratingData.average / 5) * 339.292} 339.292`}
                            />
                        </svg>
                    </div>

                    <div className="flex-1 space-y-2">
                        {ratingData.distribution.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div className="flex items-center gap-1 w-24">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`w-3 h-3 ${i < item.stars ? "text-yellow-400" : "text-gray-200"}`} />
                                    ))}
                                </div>
                                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${item.percentage}%` }} />
                                </div>
                                <div className="text-sm text-gray-500 w-12">{item.percentage}%</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 py-4">
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">All</button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">With photos/videos (733)</button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">5 stars (3849)</button>
                </div>

                {/* Review Cards */}
                {currentReviews.map((review) => (
                    <div key={review.id} className="border-t py-4">
                        <div className="flex items-start gap-4">
                            <img src={review.image} alt="" className="w-10 h-10 rounded-full bg-gray-200" />
                            <div className="flex-1">
                                <h3 className="font-medium">{review.name}</h3>
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-gray-200"}`} />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">{review.content}</p>
                                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                                    <p className="text-sm text-gray-600">{review.reply}</p>
                                </div>
                                <div className="flex items-center justify-end gap-4 text-sm text-gray-500">
                                    <button className="flex items-center gap-1">
                                        <FaThumbsUp /> {review.likes}
                                    </button>
                                    <button className="flex items-center gap-1">
                                        <FaComment /> {review.comments}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 pt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border ${currentPage === 1 ? "text-gray-300" : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <FaChevronLeft className="w-4 h-4" />
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === index + 1 ? "bg-pink-500 text-white" : "border text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border ${currentPage === totalPages ? "text-gray-300" : "text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <FaChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>


            {/*    images section */}
            <div className="mt-10 lg:col-span-2 shadow-sm rounded-2xl p-10 bg-white">
                <div className="flex justify-between p-5 shadow-sm rounded-sm mb-10 gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                        <ul className="list-disc space-y-2 pl-4 ">
                            <li> Product model: Haylou Solar Pro</li>
                            <li> Display: 1.43" AMOLED display</li>
                            <li> Resolution: 466×466px</li>
                            <li> Sensors: Heart rate sensor, motion sensor, SpO2 sensor, pressure sensor</li>
                            <li> Workout modes: 100+ modes</li>
                            <li> Battery capacity: 300mAh</li>
                        </ul>
                        <ul className="list-disc space-y-2 pl-4">
                            <li> Battery life: Approx. 7 days (24-hour heart rate monitoring)</li>
                            <li> Water-resistance grade: 2ATM</li>
                            <li> Sync data platform: Haylou Watch</li>
                            <li> Dimensions: 55×49×12mm</li>
                            <li> Strap width: 22mm</li>
                            <li> Weight: 45g with strap</li>
                        </ul>
                    </div>
                </div>
                <img src={rowimage} alt="" className="my-5" />
                <img src={rowimage2} alt="" className="my-5" />
            </div>
            {/*    images section */}

        </div>


    )
}

