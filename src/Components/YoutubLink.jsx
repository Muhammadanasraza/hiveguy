import React from 'react';
import youtube from '../assets/images/youtube.png';
import picture from '../assets/images/picture.png';

function YoutubLink() {
    return (
        <div className="container mx-auto relative text-center">
            {/* Main Image */}
            <img className="w-full max-w-7xl  mx-auto" src={picture} alt="Main Content" />
            
            {/* YouTube Icon Positioned in the Center */}
            <img 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-30 lg:h-20 min-md:h-15 min-md:w-22 max-sm:h-10 max-sm:w-13" 
                src={youtube} 
                alt="YouTube Icon" 
            />
            
            {/* Bottom Left Text */}
            <h1 className="absolute bottom-4 lg:pb-10 max-sm:pb-1 min-md:pb-5  min-md:text-4xl pl-4 left-4 lg:text-7xl max-sm:text-1xl font-bold text-white">
                Introducing HiveGY
            </h1>
        </div>
    );
}

export default YoutubLink;
