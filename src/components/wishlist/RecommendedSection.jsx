import React from "react";
import ProductCard from "./ProductCard";
import RectangleIcon from "../../assets/RectangleIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const RecommendedSection = ({ products }) => {
  return (
    <div className="container mx-auto p-4 mb-[70px]">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-5">
          <RectangleIcon />
          <h2 className="text-lg font-medium">Just For You</h2>
        </div>
        <button className="text-sm bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} showIcon="eye" />
            <div className="flex items-center text-secondary2 mt-2">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <FontAwesomeIcon
                  key={`full-${product.id}-${i}`}
                  icon={faStar}
                  className="text-secondary2"
                />
              ))}
              {product.rating % 1 >= 0.5 && (
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  className="text-secondary2"
                />
              )}
              {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                <FontAwesomeIcon
                  key={`empty-${product.id}-${i}`}
                  icon={faStar}
                  className="text-gray-300"
                />
              ))}
              <span className="ml-2 text-gray-500 text-sm">
                ({product.reviews})
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSection;
