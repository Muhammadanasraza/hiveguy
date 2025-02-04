 
import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

 

const countries  = [
  { name: "United States", code: "US", flag: "🇺🇸", language: "English" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧", language: "English" },
  { name: "Canada", code: "CA", flag: "🇨🇦", language: "English" },
  { name: "Australia", code: "AU", flag: "🇦🇺", language: "English" },
  { name: "India", code: "IN", flag: "🇮🇳", language: "English" },
]

export default function CountryDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
      >
        <span className="text-base">{selectedCountry.flag}</span>
        <span>
          {selectedCountry.language}-{selectedCountry.code}
        </span>
        <MdKeyboardArrowDown className="w-4 h-4 max-sm:w-3" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 py-1">
            {countries.map((country) => (
              <button
                key={country.code}
                onClick={() => {
                  setSelectedCountry(country)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 flex items-center gap-2
                  ${selectedCountry.code === country.code ? "bg-gray-50" : ""}`}
              >
                <span className="text-base">{country.flag}</span>
                <span>
                  {country.language}-{country.code}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

