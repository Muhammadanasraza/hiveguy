import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-gradient-to-r from-[#EC1A61] to-[#30025C]"
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
