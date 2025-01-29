
import { IoIosStar } from "react-icons/io";

export default function ProductCardList({ title, price, rating, reviews, image, badges, description }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex gap-6">
      {/* Product Image */}
      <div className="relative w-40 h-40 flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={title} fill className="object-contain" />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        <h3 className="text-base text-gray-800">{title}</h3>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <IoIosStar
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviews} sold)</span>
        </div>

        <div className="flex items-center gap-2">
          {badges.map((badge, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
              {badge}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Price Section */}
      <div className="w-32 flex-shrink-0 text-right">
        <div className="text-xl font-semibold">GYD {price.toLocaleString()}</div>
        <div className="text-sm text-gray-500 line-through">GYD {(price * 1.2).toLocaleString()}</div>
        <div className="text-red-500 text-sm">-20%</div>
      </div>
    </div>
  )
}

