import React from "react";
import ProductsCard from "./ProductsCard";
import RectangleIcon from "../../../assets/RectangleIcon";
import { bestproduct } from "../../../utils/data";

const BestSelllingProduct = () => {
  return (
    <div className="container mx-auto px-4 mb-[70px]">
      <div className="space-y-4">
        <header className="">
          <div className="flex items-center gap-4 mt-6">
            <RectangleIcon />
            <p className="text-secondary1 text-base sm:text-lg">This Month</p>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-4 sm:mb-6">
              Best Selling Products
            </h2>
            <div className="flex items-start justify-end">
              <button className="text-center my-6 sm:mt-10 cursor-pointer bg-secondary1 text-primary h-[56px] py-1 px-4 sm:py-1 sm:px-5 rounded-md mb-3 text-sm sm:text-base">
                View All Products
              </button>
            </div>
          </div>
        </header>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {bestproduct.map((item) => (
          <ProductsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSelllingProduct;
