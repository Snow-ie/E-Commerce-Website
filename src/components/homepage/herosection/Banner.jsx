import React, { useState, useEffect } from "react";
import AppleIcon from "../../../assets/images/AppleIcon.svg";
import ArrowRightIcon from "../../../assets/ArrowRightIcon";
import Iphone from "../../../assets/images/Iphone.svg";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="p-4">
      <div className="relative w-full h-[400px] md:h-[500px] bg-primary2 text-primary rounded p-6 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          <div
            className={`w-full md:w-1/2 space-y-4 transition-all duration-1000 ease-in-out transform ${
              activeSlide === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center space-x-2 md:space-x-3">
              <img
                src={AppleIcon}
                alt="Apple Icon"
                className="h-10 w-10 md:h-12 md:w-12 object-contain"
              />
              <h3 className="text-xs md:text-sm font-normal">
                iPhone 14 Series
              </h3>
            </div>

            <h2 className="text-2xl md:text-5xl font-bold leading-tight">
              Up to 10% off Voucher
            </h2>

            <div className="flex items-center space-x-2 md:space-x-3 mt-4 md:mt-6">
              <button className="border-b border-primary hover:bg-secondary1 hover:text-opacity-40 transition duration-300 text-sm md:text-base">
                Shop Now
              </button>
              <ArrowRightIcon />
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 flex justify-center md:justify-end transition-transform duration-1000 ease-in-out ${
              activeSlide === 1
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <img
              src={Iphone}
              alt="iPhone 14"
              className="w-3/4 md:w-full object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-4 md:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {[1, 2, 3, 4].map((slide, index) => (
            <div
              key={index}
              onClick={() => handleSlideChange(slide)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition duration-300 ${
                activeSlide === slide ? "bg-secondary1" : "bg-primary"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
