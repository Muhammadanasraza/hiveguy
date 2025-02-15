 
import { useState } from "react"
import {
  IoHomeOutline,
  IoShirtOutline,
  IoCarSportOutline,
  IoHardwareChipOutline,
  IoMenuOutline,
  IoChevronUpOutline,
  IoChevronForwardOutline,
} from "react-icons/io5"
import { PiHandbagSimple, PiMaskHappy, PiTelevisionSimple } from "react-icons/pi"

const categories = [
  {
    name: "Kitchen",
    icon: IoHomeOutline,
    subcategories: [
      "Mug Thermos",
      "Basket",
      "Waterproof Wall Sticker",
      "Home Brewing & Wine Making Barware",
      "Table Decoration & Accessories",
      "Wok",
    ],
  },
  {
    name: "Bathroom",
    icon: IoHomeOutline,
    subcategories: ["Towel", "Paper Holder", "Quick Dry Towel", "Hair Towel", "Mat", "Hand Towel"],
  },
  {
    name: "Bedroom",
    icon: IoShirtOutline,
    subcategories: ["Boxes", "Bags", "Decorative Mirrors", "Sculptures & Figurines", "Photo Albums", "Tapestries"],
  },
  {
    name: "Living Room",
    icon: PiTelevisionSimple,
    subcategories: [
      "Painting By Numbers",
      "Hooks",
      "Stickers & Poster",
      "Door Screen",
      "Sculptures & Figurine",
      "Tapestries",
    ],
  },
  {
    name: "Dining Room",
    icon: PiHandbagSimple,
    subcategories: [
      "Sashes",
      "Table Linens",
      "Handkerchief Towels",
      "Bug Zappers",
      "Candles & Holders",
      "Chair Leg Covers",
    ],
  },
  {
    name: "Home Office",
    icon: IoHardwareChipOutline,
    subcategories: [
      "Fabric & Lace",
      "Needle Arts & Craft",
      "Home Fragrance",
      "Candle Making",
      "Ceramics & Pottery",
      "Diamond Painting",
      "Mattress Cover",
      "Cushions",
      "Mosquito Nets",
      "Sheet Sets",
      "Duvets",
      "Bedspreads & Coverlets",
    ],
  },
  {
    name: "Garden & Balcony",
    icon: IoCarSportOutline,
    subcategories: [
      "Automatic Irrigation Equipment",
      "Garden Water Timers",
      "Garden Buildings",
      "Outdoor Heaters",
      "Garden Pots & Planters",
      "Watering & Irrigation",
    ],
  },
  {
    name: "Festive & Party Supplies",
    icon: PiMaskHappy,
    subcategories: [
      "Christmas Supplies",
      "Glow Supplies",
      "Birthday & Balloon",
      "Party Supplies",
      "Artificial Flower",
      "Gift & Gift Bag",
    ],
  },
]

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="relative w-full max-w-sm">
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          setSelectedCategory(null)
        }}
        className="flex w-[200px] items-center justify-between rounded-3xl border border-gray-200 bg-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <IoMenuOutline className="h-5 w-5" />
          <span>Category</span>
        </div>
        <IoChevronUpOutline
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-0" : "rotate-180"}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-[200px]  max-sm:w-[130px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="max-h-[400px] overflow-y-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-[11px] text-gray-900 hover:bg-gray-50"
                onClick={() => {
                  setSelectedCategory(index)
                }}
              >
                <div className="flex items-center gap-3">
                  <category.icon className="h-4 w-4 flex-shrink-0 text-gray-500" />
                  <span>{category.name}</span>
                </div>
                <IoChevronForwardOutline className="h-4 w-4 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && selectedCategory !== null && (
        <div className="absolute max-sm:left-[135px] left-[203px] mt-2  z-20 w-[700px] max-sm:w-[250px] rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-900">{categories[selectedCategory].name}</h3>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {categories[selectedCategory].subcategories.map((subcategory, index) => (
              <button
                key={index}
                className="text-left text-sm max-sm:text-[11px] text-gray-600 hover:text-gray-900"
                onClick={() => {
                  setIsOpen(false)
                  setSelectedCategory(null)
                  // Handle subcategory selection here
                }}
              >
                {subcategory}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

