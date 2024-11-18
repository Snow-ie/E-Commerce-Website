import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEye,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const OurProductCard = ({ details }) => {
  const { image, price, rating, isNew, reviews, name } = details;
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div>
      <div className="relative rounded-lg">
        {isNew && (
          <div className="absolute top-[12px] left-[12px] z-10 bg-button1 text-primary px-2 py-1 rounded-md text-sm font-normal">
            New
          </div>
        )}

        <div className="bg-secondary flex flex-col h-[220px]">
          <div
            className="relative inline-block cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="p-4 h-[180px]">
              <img
                src={image}
                alt={name}
                className="size-full object-contain"
              />
            </div>
            {hovered && (
              <button
                onClick={handleAddToCart}
                className="absolute w-full h-[41px] bg-primary2 text-primary text-center py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            )}
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

          <div className="mt-2 flex items-center gap-4">
            <span className="text-secondary1 text-base font-normal">
              ${price}
            </span>

            <div className="flex items-center text-secondary2">
              {[...Array(fullStars)].map((_, i) => (
                <FontAwesomeIcon
                  key={`full-${i}`}
                  icon={faStar}
                  className="text-secondary2"
                />
              ))}

              {hasHalfStar && (
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  className="text-secondary2"
                />
              )}

              {[...Array(emptyStars)].map((_, i) => (
                <FontAwesomeIcon
                  key={`empty-${i}`}
                  icon={faStar}
                  className="text-gray-300"
                />
              ))}

              <span className="ml-2 text-gray-500 text-sm">({reviews})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductCard;
