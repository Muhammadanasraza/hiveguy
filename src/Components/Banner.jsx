import React from "react";
import salPic from "../assets/images/salepic.png"; // Background image

export default function Banner(){
  return (
    <div
      style={{ backgroundImage: `url(${salPic})` }}
      className="   justify-center bg-cover bg-center h-[560px]"
    >
      {/* You can add text or other elements inside the banner if needed */}
    </div>
  );
};

