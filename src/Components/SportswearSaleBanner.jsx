import React from "react";
import { FiArrowRight } from "react-icons/fi";
import girlPic from "../assets/images/girlPic.png";
import { GoArrowLeft } from "react-icons/go";

const SportswearSaleBanner = () => {
  return (
    <div
      className=" mx-5 mt-6 rounded-xl px-6 md:px-12  flex flex-col md:flex-row items-center justify-between"
      style={{
        background: "linear-gradient(98.75deg, #2F015B 5.99%, #5B258E 89.58%)",
      }}
    >
      {/* Left Arrow */}

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center w-full justify-between">
      <button className="left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hidden md:block">
        <GoArrowLeft className="text-purple-700 text-xl" />
      </button>
        {/* Text Content */}
        <div className="text-white  py-6 pl-5 space-y-4 max-w-lg text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg uppercase font-medium">
            Hurry up! Limited time offer.
          </h3>
          <h1 className="text-3xl md:text-4xl font-extrabold">
            WOMEN SPORTSWEAR SALE
          </h1>
          <p className="text-sm">
            Sneakers, Keds, Sweatshirts, Hoodies & much more...
          </p>
          <button className="bg-yellow-400  text-purple-700 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-yellow-500">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className=" w-full md:w-1/3 flex justify-center md:justify-end items-end">
          <img
            src={girlPic}
            alt="Woman with shopping bags"
            className="w-2/3 md:w-full"
          />
        </div>
      {/* Right Arrow */}
      <button className=" right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hidden md:block">
        <FiArrowRight className="text-purple-700 text-xl" />
      </button>
      </div>

    </div>
  );
};

export default SportswearSaleBanner;
