import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHeart,
  faEye,
  faStar,
  faStarHalfAlt,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { addToWishlist } from "../../redux/wishlist/wishlistSlice";
import { toast } from "react-toastify";

const OurProductCard = ({ details }) => {
  const { image, price, rating, isNew, reviews, name } = details;

  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (product) => {
    toast.success("Item added to cart!");
    dispatch(addToCart(product));
    setShowModal(true);
  };

  const handleAddToWishlist = (product) => {
    if (isWishlisted) {
      toast.info("Item removed from wishlist!");
    } else {
      toast.success("Item added to wishlist!");
      dispatch(addToWishlist(product));
    }
    setIsWishlisted((prev) => !prev);
  };

  const closeModal = () => setShowModal(false);

  const renderRating = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon
            key={`full-${i}`}
            icon={faStar}
            className="text-secondary2"
          />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-secondary2" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon
            key={`empty-${i}`}
            icon={faStar}
            className="text-gray-300"
          />
        ))}
      </>
    );
  };

  return (
    <div className="relative rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      {isNew && (
        <div className="absolute top-[12px] left-[12px] z-10 bg-button1 text-primary px-2 py-1 rounded-md text-sm font-normal">
          New
        </div>
      )}

      <div
        className="bg-secondary flex flex-col h-[220px] rounded-t-lg overflow-hidden relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link
          to={{
            pathname: `/details/${details.id}`,
            state: { name: details.name, image: details.image },
          }}
          className="p-4 h-[180px]"
        >
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="size-full object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </Link>
        {hovered && (
          <button
            onClick={() => handleAddToCart(details)}
            className="absolute bottom-0 w-full h-[41px] bg-primary2 text-primary text-center py-2 rounded-b-lg transition-all duration-300"
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="absolute top-[5px] right-[5px] flex flex-col space-y-2">
        <button
          onClick={() => handleAddToWishlist(details)}
          className={`rounded-full shadow w-[34px] h-[34px] transition-colors ${
            isWishlisted ? "bg-black text-white" : "bg-white text-gray-500"
          }`}
          aria-label="Add to Wishlist"
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`transition-colors ${
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
        <h3 className="text-base text-wrap font-medium text-gray-800">
          {name}
        </h3>
        <div className="mt-2 flex items-center">
          <span className="text-secondary1 text-base font-bold">${price}</span>
        </div>
        <div className="flex items-center text-secondary2">
          {renderRating()}
          <span className="ml-2 text-gray-500 text-sm">({reviews})</span>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md shadow-lg">
            <div className="flex flex-col items-center">
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

export default OurProductCard;
