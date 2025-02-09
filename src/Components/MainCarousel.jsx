 
import { useState } from "react"
import { motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import girl from '../assets/images/girlPic.png'

const CarouselData = [
  {
    title: "WOMEN SPORTSWEAR SALE",
    subtitle: "Hurry up! Limited time offer.",
    description: "Sneakers, Keds, Sweatshirts, Hoodies & much more...",
    buttonText: "Shop Now",
    image:girl,
    bgColor: "bg-gradient-to-r from-[#2F015B] to-[#5B258E]",
  },
  {
    title: "SUMMER COLLECTION",
    subtitle: "New Arrivals 2025",
    description: "Dresses, Tops, Shorts & Beachwear collection",
    buttonText: "Explore",
    image: girl,
    bgColor: "bg-gradient-to-br from-[#1FA2FF] to-[#12D8FA] to-[#A6FFCB]", // Blue-Cyan-Green Gradient
  },
  {
    title: "ACCESSORIES DEALS",
    subtitle: "Special Weekend Offer",
    description: "Bags, Jewelry, Sunglasses & more accessories",
    buttonText: "View Deals",
    image: girl,
    bgColor: "bg-[radial-gradient(circle,_#FF9A8B,_#FF6A88,_#FF99AC)]", // Warm Peach-Pink Gradient
  },

]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CarouselData.length)
  }

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CarouselData.length) % CarouselData.length)
  }

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl mt-5">
      <div className={`absolute inset-0  ${CarouselData[currentIndex].bgColor} rounded-lg px-20`}>
        <div className="container mx-auto flex h-full items-center px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6 text-white">
              <motion.h2
                key={`title-${currentIndex}`} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold md:text-5xl"
              >
                {CarouselData[currentIndex].title}
              </motion.h2>
              <motion.p
                key={`subtitle-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl"
              >
                {CarouselData[currentIndex].subtitle}
              </motion.p>
              <motion.p
                key={`description-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base opacity-90 md:text-lg"
              >
                {CarouselData[currentIndex].description}
              </motion.p>
              <motion.button
                key={`button-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-fit rounded-full bg-yellow-400 px-6 py-2.5 font-semibold text-gray-900 hover:bg-yellow-300 md:px-8 md:py-3"
              >
                {CarouselData[currentIndex].buttonText}
              </motion.button>
            </div>
            <div className="relative">
              <motion.img
                key={`image-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={CarouselData[currentIndex].image}
                alt="Promotional image"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handleBack}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Previous slide"
      >
        <MdChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Next slide"
      >
        <MdChevronRight className="h-8 w-8" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {CarouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

