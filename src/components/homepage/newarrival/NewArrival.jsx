import React from "react";
import PlayStation from "../../../assets/images/PlayStation.svg";
import WomenWear from "../../../assets/images/WomenWear.svg";
import Speaker from "../../../assets/images/Speaker.svg";
import Perfume from "../../../assets/images/Perfume.svg";
import RectangleIcon from "../../../assets/RectangleIcon";

const NewArrival = () => {
  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <header className="space-y-4">
        <div className="flex items-center gap-4 animate-fade-in">
          <RectangleIcon />
          <p className="text-secondary1 font-base sm: text-lg mb-2">Featured</p>
        </div>

        <h1 className="text-2xl font-bold mb-6 animate-slide-in">
          New Arrival
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-1 lg:col-span-2 bg-frame text-white rounded-lg overflow-hidden relative flex items-end min-h-[600px] animate-fade-in">
          <img
            src={PlayStation}
            alt="PlayStation 5"
            className="absolute inset-0 w-[511px] h-[511px] object-cover opacity-70 transition-transform duration-500 transform hover:scale-110"
          />
          <div className="relative p-6">
            <h2 className="text-lg font-semibold">PlayStation 5</h2>
            <p className="text-base mt-2 mb-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <div className="flex items-center space-x-2 md:space-x-3 mt-4 md:mt-6">
              <button className="border-b border-primary hover:bg-secondary1 hover:text-opacity-40 transition duration-300 text-sm md:text-base">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-2 animate-slide-in">
          <div className="bg-frame text-white rounded-lg overflow-hidden relative flex items-end min-h-[286px] animate-fade-in">
            <img
              src={WomenWear}
              alt="Women's Collections"
              className="absolute inset-0 w-full h-[286px] object-cover opacity-70 transition-transform duration-500 transform hover:scale-110"
            />
            <div className="relative p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Women’s Collections</h2>
              <p className="text-sm mb-4">
                Featured women collections that give you another vibe.
              </p>
              <div className="flex items-center space-x-2 md:space-x-3 mt-4 md:mt-6">
                <button className="border-b border-primary hover:bg-secondary1 hover:text-opacity-40 transition duration-300 text-sm md:text-base">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[30px]">
            <div className="bg-frame text-white rounded-lg overflow-hidden relative flex items-end min-h-[284px] animate-fade-in">
              <img
                src={Speaker}
                alt="Speakers"
                className="absolute inset-0 w-[190px] h-[221px] object-cover opacity-70 transition-transform duration-500 transform hover:scale-110"
              />
              <div className="relative p-4 text-white">
                <h2 className="text-lg font-bold mb-2">Speakers</h2>
                <p className="text-sm mb-4">Amazon wireless speakers</p>
                <div className="flex items-center space-x-2 md:space-x-3 mt-4 md:mt-6">
                  <button className="border-b border-primary hover:bg-secondary1 hover:text-opacity-40 transition duration-300 text-sm md:text-base">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-frame text-white rounded-lg overflow-hidden relative flex items-end min-h-[284px] animate-fade-in">
              <div className="">
                <img
                  src={Perfume}
                  alt="Perfume"
                  className="absolute inset-2 w-[201px] h-[203px] object-cover opacity-70 transition-transform duration-500 transform hover:scale-110"
                />
                <div className="relative p-4 text-white">
                  <h2 className="text-lg font-bold mb-2">Perfume</h2>
                  <p className="text-sm mb-4">GUCCI INTENSE OUD EDP</p>
                  <div className="flex items-center space-x-2 md:space-x-3 mt-4 md:mt-6">
                    <button className="border-b border-primary hover:bg-secondary1 hover:text-opacity-40 transition duration-300 text-sm md:text-base">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-in-out forwards;
        }

        .animate-slide-in {
          animation: slide-in 0.8s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NewArrival;
