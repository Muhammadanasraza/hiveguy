"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import girl from "../assets/images/girlPic.png"

const CarouselData = [
  {
    title: "WOMEN SPORTSWEAR",
    subtitle: "Hurry up! Limited time offer.",
    description: "Sneakers, Keds, Sweatshirts, Hoodies & much more...",
    buttonText: "Shop Now",
    image: girl,
    bgColor: "bg-gradient-to-r from-[#2F015B] to-[#5B258E]",
  },
  {
    title: "SUMMER COLLECTION",
    subtitle: "New Arrivals 2025",
    description: "Dresses, Tops, Shorts & Beachwear collection",
    buttonText: "Explore",
    image: girl,
    bgColor: "bg-gradient-to-br from-[#1FA2FF] to-[#12D8FA] to-[#A6FFCB]",
  },
  {
    title: "ACCESSORIES DEALS",
    subtitle: "Special Weekend Offer",
    description: "Bags, Jewelry, Sunglasses & more accessories",
    buttonText: "View Deals",
    image: girl,
    bgColor: "bg-[radial-gradient(circle,_#FF9A8B,_#FF6A88,_#FF99AC)]",
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
    <div className="px-1">
  
    <div className="relative  h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl mt-3 sm:mt-4 md:mt-5 ">
      <div
        className={`absolute inset-0 ${CarouselData[currentIndex].bgColor} rounded-lg px-4 sm:px-8 md:px-12 lg:px-20`}
      >
        <div className="container mx-auto flex h-full items-center ">
          <div className="grid  grid-cols-1 md:grid-cols-2 max-sm:grid-cols-2 gap-4 max-sm:gap-2 md:gap-8 ">
            <div className="flex flex-col justify-center space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 text-white max-sm:mx-6">
              <motion.h2
                key={`title-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
              >
                {CarouselData[currentIndex].title}
              </motion.h2>
              <motion.p
                key={`subtitle-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                {CarouselData[currentIndex].subtitle}
              </motion.p>
              <motion.p
                key={`description-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xs sm:text-sm md:text-base lg:text-lg opacity-90"
              >
                {CarouselData[currentIndex].description}
              </motion.p>
              <motion.button
                key={`button-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-fit rounded-full bg-yellow-400 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2.5 lg:px-8 lg:py-3 text-xs sm:text-sm md:text-base font-semibold text-gray-900 hover:bg-yellow-300"
              >
                {CarouselData[currentIndex].buttonText}
              </motion.button>
            </div>
            <div className="relative  md:block ">
              <motion.img
                key={`image-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={CarouselData[currentIndex].image}
                alt="Promotional image"
                className="h-full w-full  object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handleBack}
        className="absolute  left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Previous slide"
      >
        <MdChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        aria-label="Next slide"
      >
        <MdChevronRight className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 flex -translate-x-1/2 space-x-1 sm:space-x-2">
        {CarouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 sm:h-2 transition-all ${
              index === currentIndex ? "bg-white w-3 sm:w-4" : "bg-white/50 w-1.5 sm:w-2"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

