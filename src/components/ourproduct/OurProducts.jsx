import React, { useRef } from "react";
import { Link } from "react-router-dom";
import RectangleIcon from "../../assets/RectangleIcon";
import FillLeftArrow from "../../assets/FillLeftArrow";
import FillRightArrow from "../../assets/FillRightArrow";
import OurProductCard from "./OurProductCard";
import { ourproduct } from "../../utils/data";

const OurProducts = () => {
  const ourProductRef = useRef(null);

  const scrollLeft = () => {
    if (ourProductRef.current) {
      ourProductRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (ourProductRef.current) {
      ourProductRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <div className=" mt-6">
        <header className="space-y-4 ">
          <div className="flex items-center gap-4">
            <RectangleIcon />
            <p className="text-secondary1 text-base sm:text-lg">Our Products</p>
          </div>
          <div className="flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Explore Our Products
            </h2>
            <div className="flex items-center  gap-4">
              <button
                onClick={scrollLeft}
                className="p-2 hover:bg-gray-200 rounded-full"
              >
                <FillLeftArrow />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 hover:bg-gray-200 rounded-full"
              >
                <FillRightArrow />
              </button>
            </div>
          </div>
        </header>

        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] mt-2"
          ref={ourProductRef}
        >
          {ourproduct.map((details) => (
            <li key={details.id}>
              <OurProductCard details={details} />
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-6 sm:mt-10">
          <Link
            className="bg-secondary1 text-primary py-3 px-6 rounded-md text-sm sm:text-base hover:bg-secondary2 transition flex items-center"
            to="/products?timeline=ourproduct"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
