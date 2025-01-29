
import { IoIosStar } from "react-icons/io";

export default function ProductCard({ title, price, rating, Sold, image, badges }) {
  return (
    <div className="bg-white p-4 mx-1 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="relative mb-4">
        <img src={image} alt={title} className="object-contain mx-auto" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm text-gray-800 line-clamp-2">{title}</h3>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <IoIosStar key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
          ))}
          <span className="text-xs text-gray-500">Sold ({Sold})</span>
        </div>
        <div className="flex items-center gap-2">
          {badges.map((badge, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
              {badge}
            </span>
          ))}
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold">GYD {price.toLocaleString()}</span>
          <span className="text-sm text-gray-500 line-through">GYD {(price * 1.2).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
