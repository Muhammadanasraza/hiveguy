import React from "react";

import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { LuMessageCircleMore } from "react-icons/lu";
import { RiArrowRightLine } from "react-icons/ri";
import newsimg from '../assets/images/news.jpg'



const LatestNews = () => {
  const news = [
    {
      id: 1,
      image: "/path/to/image1.png", // Replace with the actual image paths
      author: "Kristin",
      date: "19 Dec, 2013",
      views: 453,
      title: "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
      description:
        "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
    },
    {
      id: 2,
      image: "/path/to/image2.png",
      author: "Robert",
      date: "28 Nov, 2015",
      views: 738,
      title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
      description:
        "Mauris scelerisque odio ut rutrum volutpat. Pellentesque eu, vulputate at tortor vitae, hendrerit blandit lorem.",
    },
    {
      id: 3,
      image: "/path/to/image3.png",
      author: "Arlene",
      date: "9 May, 2014",
      views: 826,
      title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
      description:
        "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
    },
  ];

  return (
    <div className="py-10 ">
      <h2 className="text-3xl font-bold text-center mb-6">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={newsimg}
              alt={item.title}
              className="mx-auto p-3 object-cover "
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-2">
                  <i className="text-orange-500 material-icons"><CgProfile/></i>
                  {item.author}
                </span>
                <span className="mx-4">|</span>
                <span className="flex items-center gap-2">
                  <i className="text-orange-500 material-icons"><SlCalender/></i>
                  {item.date}
                </span>
                <span className="mx-4">|</span>
                <span className="flex items-center gap-2">
                  <i className="text-orange-500 material-icons"><LuMessageCircleMore/></i>
                  {item.views}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <button className="flex items-center border-1 p-2 text-orange-500 font-semibold">
                Read More
                <i className="ml-1 text-orange-500 material-icons">
                  <RiArrowRightLine/>
                </i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
