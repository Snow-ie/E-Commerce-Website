import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEye,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const ProductsCard = ({ item }) => {
  const { image, originalPrice, discountedPrice, rating, reviews, name } = item;

  return (
    <div className="relative rounded-lg">
      <div className="bg-secondary flex flex-col gap-4 h-[250px]">
        <div className="p-4">
          <img
            src={image}
            alt={name}
            className="w-full h-[180px] object-contain"
          />
        </div>
      </div>

      <div className="absolute top-[5px] right-[5px] flex flex-col space-y-2">
        <button className="bg-white rounded-full shadow w-[34px] h-[34px] hover:bg-gray-200">
          <FontAwesomeIcon icon={faHeart} className="text-gray-500" />
        </button>
        <button className="bg-white rounded-full shadow w-[34px] h-[34px] hover:bg-gray-200">
          <FontAwesomeIcon icon={faEye} className="text-gray-500" />
        </button>
      </div>

      <div className="mt-4">
        <h3 className="text-base font-normal">{name}</h3>
        <div className="mt-2 flex items-center space-x-4">
          <span className="text-secondary1 text-base font-normal">
            ${discountedPrice}
          </span>
          <span className="text-gray-400 line-through">${originalPrice}</span>
        </div>

        <div className="mt-2 flex items-center text-secondary2">
          {[...Array(5)].map((_, i) => {
            if (i < Math.floor(rating)) {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="text-secondary2"
                />
              );
            } else if (i < rating) {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faStarHalfAlt}
                  className="text-secondary2"
                />
              );
            } else {
              return (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="text-gray-300"
                />
              );
            }
          })}
          <span className="ml-2 text-gray-500 text-sm">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
