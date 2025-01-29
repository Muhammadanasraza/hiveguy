
import { FaStar, FaThumbsUp, FaComment } from "react-icons/fa"
import rowimage from "../assets/images/rowimage.png"
import rowimage2 from "../assets/images/rowimage2.png"

const ratingData = {
    average: 4.8,
    total: 3849,
    distribution: [
        { stars: 5, percentage: 93, count: 3849 },
        { stars: 4, percentage: 89, count: 48 },
        { stars: 3, percentage: 12, count: 19 },
        { stars: 2, percentage: 0, count: 6 },
        { stars: 1, percentage: 0, count: 28 },
    ],
}




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

                {/* Review Card */}
                <div className="border-t py-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                        <div className="flex-1">
                            <h3 className="font-medium">Pablo Kathandra</h3>
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                The goods landed safely, arrived quickly, use instant delivery, the quality of the goods is okay and
                                works well, the packing is safe and the delivery is fast, great, thank you!
                            </p>
                            <div className="bg-pink-50 p-4 rounded-lg mb-4">
                                <p className="text-sm text-gray-600">
                                    Thank you. Your kind words mean a lot to us. Thank you for being an amazing customer and have an
                                    excellent day. Regards, MoboPro.
                                </p>
                            </div>
                            <div className="flex items-center justify-end gap-4 text-sm text-gray-500">
                                <button className="flex items-center gap-1">
                                    <FaThumbsUp /> 16
                                </button>
                                <button className="flex items-center gap-1">
                                    <FaComment /> 18
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 pt-4">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full border">&lt;</button>
                    {[1, 2, 3, 4].map((page) => (
                        <button
                            key={page}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${page === 1 ? "bg-pink-500 text-white" : "border"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="w-8 h-8 flex items-center justify-center rounded-full border">&gt;</button>
                </div>
            </div>
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
        </div>


    )
}

