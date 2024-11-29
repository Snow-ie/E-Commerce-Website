import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEye,
  faStar,
  faStarHalfAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import { addToWishlist } from "../../../redux/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import "../../../App.css";

const ProductCard = ({ product }) => {
  const { image, discount, price, discountPrice, rating, reviews, name } =
    product;

  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (product) => {
    toast.success("Item added to cart successfully!");
    dispatch(addToCart(product));
    setShowModal(true);
  };

  const handleWishlistClick = (product) => {
    if (isWishlisted) {
      toast.info("Item removed from wishlist!");
    } else {
      toast.success("Item added to wishlist!");
      dispatch(addToWishlist(product));
    }
    setIsWishlisted((prev) => !prev);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="relative rounded-lg w-full">
      {discount > 0 && (
        <div className="absolute top-[12px] left-[12px] bg-secondary1 text-primary px-2 py-1 rounded-md text-sm font-normal">
          -{discount}%
        </div>
      )}

      <div
        className="bg-secondary flex flex-col gap-4 h-[250px] relative overflow-hidden rounded-t-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link
          className="p-4 transition-transform duration-300 transform hover:scale-105"
          to={{
            pathname: `/details/${product.id}`,
            state: { name: product.name, image: product.image },
          }}
        >
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-[180px] object-contain"
          />
        </Link>
        {hovered && (
          <button
            onClick={() => handleAddToCart(product)}
            className="absolute bottom-0 left-0 w-full h-[40px] bg-primary2 text-primary text-center py-2 rounded-b-lg transition-opacity duration-300 opacity-100"
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="absolute top-[5px] right-[5px] flex flex-col space-y-2">
        <button
          onClick={() => handleWishlistClick(product)}
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
        <h3 className="text-base font-medium">{name}</h3>
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

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md shadow-lg transform transition-transform duration-300 ease-out scale-100">
            <div className="flex flex-col items-center animate-fade-in">
              <img
                src={image}
                alt={name}
                className="w-[120px] h-[120px] object-contain mb-4 rounded-md shadow-md"
              />
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 text-4xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                {name} Added to Cart!
              </h3>
              <p className="text-gray-600 text-sm mb-6 text-center">
                You can continue shopping or proceed to checkout now.
              </p>
              <div className="flex justify-center gap-4 w-full">
                <button
                  onClick={closeModal}
                  className="bg-primary2 text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    console.log("Redirect to cart page");
                  }}
                  className="bg-primary2 text-white px-6 py-2 rounded hover:bg-secondary-dark transition-colors"
                >
                  Go to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
