"use client"

import { useState } from "react"
import { IoIosStar } from "react-icons/io"
import { Link } from "react-router"
import Button from "./button"

export default function ProductCardList({ title, price, rating, reviews, image, badges, description }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 sm:gap-6"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Product Image */}
      <div className="relative w-full sm:w-40 h-40 flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-contain" />

        {isHovering && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#2e2d2d84] bg-opacity-50 rounded-lg transition-opacity duration-200">
            <Link to="/addtocart">
              <Button variant="secondary" size="sm">
                Preview
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        <h3 className="text-base text-gray-800">{title}</h3>

        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
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

        <div className="flex flex-wrap items-center gap-2">
          {badges.map((badge, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
              {badge}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 sm:line-clamp-none">{description}</p>
      </div>

      {/* Price Section */}
      <div className="w-full sm:w-32 flex-shrink-0 text-left sm:text-right mt-4 sm:mt-0">
        <div className="text-xl font-semibold">GYD {price.toLocaleString()}</div>
        <div className="text-sm text-gray-500 line-through">GYD {(price * 1.2).toLocaleString()}</div>
        <div className="text-red-500 text-sm">-20%</div>
      </div>
    </div>
  )
}

