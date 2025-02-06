import React from "react";
import grayGirl from '../assets/images/grayGirl.png';
import apple from '../assets/images/apple.png';
import blackLaptop from '../assets/images/blackLaptop.png';
import fly from "../assets/images/fly.png"

const HotDeals = () => {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Hot deals</h2>
            <div className="grid grid-cols-1  md:grid-cols-3  ">
                {/* Phone Deal */}
                <div className="my-auto">
                    <img
                        src={apple}
                        alt="iPhone"
                        className="w-96 h-140 object-cover "
                    />
                </div>

                {/* Fashion Deal */}
                <div className="my-auto">
                    <img
                        src={grayGirl}
                        alt="Adidas Outfit"
                        className="w-96 h-130 object-cover"
                    />
                </div>
                <div className="">
                    {/* Omega Gift Shop */}
                    <div className="bg-red-500 my-5  text-white rounded-2xl shadow-lg p-10 flex flex-col-2 gap-10 items-center justify-center">
                       <div>


                        <h3 className="text-xl font-bold">Omega gift Shop</h3>
                        <p className="mt-2">Get 70% Off</p>
                       </div>
                       <div>

                       <h1 className="bg-white rounded-full  ">
                        <img
                            src={fly}
                            alt="Shopping"
                            className="w-full lg:h-40 mt-2  text-left "
                        />
                       </h1>
                       </div>
                    </div>

                    {/* Laptop Deal */}
                    <div className=" rounded-2xl shadow-lg   overflow-hidden">
                        <img
                            src={blackLaptop}
                            alt="Laptop"
                            className="w-full h-60   opacity-100"
                        />
                        <div className=" bottom-4 left-4 text-xl font-bold"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotDeals;
