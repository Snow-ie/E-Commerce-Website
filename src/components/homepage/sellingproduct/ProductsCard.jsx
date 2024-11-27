import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEye,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../redux/wishlist/wishlistSlice";
import { toast } from "react-toastify";

const ProductsCard = ({ item }) => {
  const { image, price, discountPrice, rating, reviews, name } = item;

  const dispatch = useDispatch();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToWishlist = (product) => {
    if (isWishlisted) {
      toast.info("Item removed from wishlist!");
    } else {
      toast.success("Item added to wishlist!");
      dispatch(addToWishlist(product));
    }
    setIsWishlisted((prev) => !prev);
  };

  return (
    <div className="relative rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="bg-secondary flex flex-col gap-4 h-[250px] rounded-t-lg overflow-hidden">
        <Link
          to={{
            pathname: `/details/${item.id}`,
            state: { name: item.name, image: item.image },
          }}
          className="p-4"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-[180px] object-contain transition-transform duration-300 transform hover:scale-105"
          />
        </Link>
      </div>

      <div className="absolute top-[5px] right-[5px] flex flex-col space-y-2">
        <button
          onClick={() => handleAddToWishlist(item)}
          className={`rounded-full shadow w-[34px] h-[34px] transition-colors duration-200 ${
            isWishlisted ? "bg-black text-white" : "bg-white text-gray-500"
          }`}
          aria-label="Add to Wishlist"
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`transition-colors duration-200 ${
              isWishlisted ? "text-white" : "hover:text-hoverbutton"
            }`}
          />
        </button>
        <button
          className="bg-white rounded-full shadow w-[34px] h-[34px] hover:bg-gray-200 transition-colors duration-200"
          aria-label="View Product"
        >
          <FontAwesomeIcon
            icon={faEye}
            className="text-gray-500 hover:text-hoverbutton"
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-base font-medium text-gray-800">{name}</h3>
        <div className="mt-2 flex items-center space-x-4">
          {discountPrice ? (
            <>
              <span className="text-secondary1 text-base font-bold">
                ${discountPrice}
              </span>
              <span className="text-gray-400 line-through">${price}</span>
            </>
          ) : (
            <span className="text-secondary1 text-base font-bold">
              ${price}
            </span>
          )}
        </div>

        {/* Rating Section */}
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
