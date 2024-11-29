import React, { useState, useEffect } from "react";
import Jbl from "../../../assets/images/Jbl.svg";

const BannerJbl = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, days, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        return { hours, days, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-primary2 text-primary p-8 lg:p-12 rounded-lg shadow-lg relative space-y-8 lg:space-y-0 lg:space-x-12 animate-fade-in">
        <div className="flex flex-col space-y-4 lg:max-w-md">
          <p className="text-button1 text-sm font-medium">Categories</p>
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight animate-slide-in">
            Enhance Your Music Experience
          </h1>

          <div className="flex space-x-4 mt-4">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-[64px] h-[64px] bg-primary text-primary2 rounded-full transition-transform duration-500 transform hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  <span className="text-sm lg:text-base font-semibold">
                    {value < 10 ? `0${value}` : value}
                  </span>
                </div>
                <span className="text-[8px] uppercase">{unit}</span>
              </div>
            ))}
          </div>

          <button className="bg-button1 text-primary1 font-semibold w-[171px] py-2 px-4 rounded mt-6 hover:bg-button1 hover:scale-105 transition duration-300 ease-in-out">
            Buy Now!
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Jbl}
            alt="Music Speaker"
            loading="lazy"
            className="w-3/4 lg:w-full object-contain animate-bounce-slow"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }

        .animate-slide-in {
          animation: slide-in 1s ease-in-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default BannerJbl;
