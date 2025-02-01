import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import img1 from "../assets/images/category/img1.jpg";
import img2 from "../assets/images/category/img2.jpg";
import img3 from "../assets/images/category/img3.jpg";
import img4 from "../assets/images/category/img4.jpg";
import img5 from "../assets/images/category/img5.jpg";

const images = [img1, img2,img3,img4,img5];

const SportswearSaleBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative mx-5 mt-6 overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hidden md:block"
      >
        <GoArrowLeft className="text-purple-700 text-xl" />
      </button>
      
      {/* Single Image Container with Motion */}
      <div className="flex overflow-hidden justify-center p-4">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Sale item"
          className="w-7xl h-[600px] object-cover rounded-xl shadow-md"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hidden md:block"
      >
        <FiArrowRight className="text-purple-700 text-xl" />
      </button>
    </div>
  );
};

export default SportswearSaleBanner;
