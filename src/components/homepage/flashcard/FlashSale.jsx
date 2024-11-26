import RectangleIcon from "../../../assets/RectangleIcon";
import FillLeftArrow from "../../../assets/FillLeftArrow";
import FillRightArrow from "../../../assets/FillRightArrow";

import ProductCard from "./ProductCard";
import { flashSaleProducts } from "../../../utils/data";
import CountdownTimer from "./CounterdownTimer";
import { useRef } from "react";
import { Link } from "react-router-dom";

const FlashSale = () => {
  const targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

  const flashSaleRef = useRef(null);

  const scrollLeft = () => {
    if (flashSaleRef.current) {
      flashSaleRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (flashSaleRef.current) {
      flashSaleRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container mx-auto px-4 py-[70px] ">
      <div className="lg:flex lg:items-end ">
        <header className="space-y-4 lg:w-1/4">
          <div className="flex items-center gap-4">
            <RectangleIcon />
            <p className="text-secondary1 text-base sm:text-lg">Today's</p>
          </div>
          <h2 className=" text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Flash Sales
          </h2>
        </header>
        <div className="flex justify-between items-end lg:w-3/4">
          <CountdownTimer targetDate={targetDate} />
          <div className="flex items-center justify-end gap-4">
            <button onClick={scrollLeft}>
              <FillLeftArrow />
            </button>
            <button onClick={scrollRight}>
              {" "}
              <FillRightArrow />
            </button>
          </div>
        </div>
      </div>
      <ul
        className="flex items-center gap-5  w-full mt-2 overflow-x-auto scrollbar scrollbar-h-1"
        ref={flashSaleRef}
      >
        {flashSaleProducts.map((product) => (
          <li key={product.id}>
            {" "}
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div>
        <div className="flex items-start justify-center border-b">
          <Link
            className="text-center my-6 sm:mt-10 cursor-pointer bg-secondary1 text-primary h-[56px] py-1 px-4 sm:py-1 sm:px-5 rounded-md mb-3 text-sm sm:text-base flex items-center"
            to="/products?timeline=today"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
