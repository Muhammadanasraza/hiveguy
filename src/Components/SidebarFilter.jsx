 
import   React from "react"
import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai"
import { BsCheckCircleFill, BsLightningChargeFill } from "react-icons/bs"



function FilterSection({ title, children, className } ) {
  return (
    <div className={`py-4 border-b border-gray-200 ${className}`}>
      <h2 className="text-sm font-semibold mb-2">{title}</h2>
      {children}
    </div>
  )
}

 

function ColorSwatch({ color, label, selected } ) {
  return (
    <button
      className={`w-6 h-6 rounded-full border-2 ${selected ? "border-blue-500" : "border-gray-200"}`}
      style={{ backgroundColor: color }}
      title={label}
    />
  )
}

export default function SidebarFilter() {
  return (
    <div className="w-64 bg-[#FFF6F6] p-4 shadow-lg  ">
      {/* Promotion & Services */}
      <FilterSection title="Promotion & Services">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" id="authentic" className="w-4 h-4 border-gray-300 " />
            <label htmlFor="authentic" className="flex items-center gap-2">
              <BsCheckCircleFill className="text-purple-600 w-4 h-4" />
              Authentic Brands
            </label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" id="verified" className="w-4 h-4 border-gray-300" />
            <label htmlFor="verified" className="flex items-center gap-2">
              <AiOutlineHeart className="text-pink-600 w-4 h-4" />
              Buyer's Verified
            </label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" id="cod" className="w-4 h-4 border-gray-300" />
            <label htmlFor="cod" className="flex items-center gap-2">
              <BsLightningChargeFill className="text-green-600 w-4 h-4" />
              Cash On Delivery
            </label>
          </div>
        </div>
      </FilterSection>

      {/* Category */}
      <FilterSection title="Category">
        <div className="space-y-2 text-sm">
          {["SmartWatches", "Mobile Phone Cases", "Cases", "SmartWatchStraps", "Docks & Chargers"].map((category) => (
            <div key={category} className="flex items-center gap-2">
              <input type="checkbox" id={category} className="w-4 h-4 border-gray-300" />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Brand */}
      <FilterSection title="Brand">
        <div className="space-y-2 text-sm">
          {["Realmi", "HayLou", "AMAZFIT", "Nike Gyrate", "Faster", "Xiaomi", "Apple"].map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <input type="checkbox" id={brand} className="w-4 h-4 border-gray-300" />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Color */}
      <FilterSection title="Color">
        <div className="flex flex-wrap gap-2">
          <ColorSwatch color="#000000" label="Black" />
          <ColorSwatch color="#FFFFFF" label="White" />
          <ColorSwatch color="#FF0000" label="Red" />
          <ColorSwatch color="#00FF00" label="Green" />
          <ColorSwatch color="#0000FF" label="Blue" />
          <ColorSwatch color="#FFFF00" label="Yellow" />
          <ColorSwatch color="#FF69B4" label="Pink" />
          <ColorSwatch color="#800080" label="Purple" />
        </div>
      </FilterSection>

      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="space-y-2">
          <div className="flex gap-2">
            <input type="number" placeholder="Min" className="w-20 px-2 py-1 border rounded text-sm" />
            <span className="text-gray-500">-</span>
            <input type="number" placeholder="Max" className="w-20 px-2 py-1 border rounded text-sm" />
          </div>
          <button className="px-4 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
            Apply
          </button>
        </div>
      </FilterSection>

      {/* Rating */}
      <FilterSection title="Rating">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <input type="checkbox" id={`rating-${rating}`} className="w-4 h-4 border-gray-300" />
              <label htmlFor={`rating-${rating}`} className="flex items-center gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <AiFillStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
                {Array.from({ length: 5 - rating }).map((_, i) => (
                  <AiOutlineStar key={i} className="w-4 h-4 text-gray-300" />
                ))}
                <span className="text-sm text-gray-600">& Up</span>
              </label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Shipping */}
      <FilterSection title="Shipping">
        <div className="space-y-2 text-sm">
          {["Free Shipping", "Cash on Delivery"].map((option) => (
            <div key={option} className="flex items-center gap-2">
              <input type="checkbox" id={option} className="w-4 h-4 border-gray-300" />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Digital Payment */}
      <FilterSection title="Digital Payment">
        <div className="space-y-2 text-sm">
          {["Credit Card", "Debit Card", "Net Banking", "UPI"].map((payment) => (
            <div key={payment} className="flex items-center gap-2">
              <input type="checkbox" id={payment} className="w-4 h-4 border-gray-300" />
              <label htmlFor={payment}>{payment}</label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Seller Type */}
      <FilterSection title="Seller Type">
        <div className="space-y-2 text-sm">
          {["Local Seller", "Preferred Seller", "Top Rated"].map((type) => (
            <div key={type} className="flex items-center gap-2">
              <input type="checkbox" id={type} className="w-4 h-4 border-gray-300" />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </div>
      </FilterSection>
    </div>
  )
}

