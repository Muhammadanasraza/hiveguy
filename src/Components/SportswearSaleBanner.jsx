import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import img1 from "../assets/images/category/img1.jpg";
import img2 from "../assets/images/category/img2.jpg";
import img3 from "../assets/images/category/img3.jpg";
import img4 from "../assets/images/category/img4.jpg";
import img5 from "../assets/images/category/img5.jpg";

const images = [img1, img2, img3, img4, img5];

const SportswearSaleBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ position: "relative", margin: "20px 0", overflow: "hidden", zIndex: 10 }}>
      {/* Left Arrow */}
      <button onClick={scrollLeft} style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", background: "white", padding: "10px", borderRadius: "50%", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <GoArrowLeft style={{ color: "#6d28d9", fontSize: "20px" }} />
      </button>

      {/* Image */}
      <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt="Sale item"
          style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Right Arrow */}
      <button onClick={scrollRight} style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", background: "white", padding: "10px", borderRadius: "50%", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <FiArrowRight style={{ color: "#6d28d9", fontSize: "20px" }} />
      </button>
    </div>
  );
};

export default SportswearSaleBanner;
