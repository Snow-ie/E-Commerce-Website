import React from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { removeFromWishlist } from "../../redux/wishlist/wishlistSlice";
import CartIcon from "../../assets/nav/CartIcon";
import { toast } from "react-toastify";

const ProductCard = ({ product, showIcon }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Item added to cart!");
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromWishlist({ id: productId }));
    toast.info("Item removed!");
  };

  return (
    <div className="relative">
      {product.discount && (
        <div className="absolute top-2 left-2 bg-secondary1 text-primary text-xs px-2 py-1 rounded">
          -{product.discount}
        </div>
      )}

      <div className="relative bg-secondary4 h-[220px]">
        <div className="h-[180px] p-4">
          <img
            src={product.image}
            alt={product.name || "Product Image"}
            className="w-full h-full object-contain rounded-md mb-4"
          />
        </div>

        {showIcon && (
          <div
            className="absolute top-2 right-2 p-1 bg-primary rounded-full shadow hover:bg-gray-100 cursor-pointer"
            onClick={() =>
              showIcon === "trash"
                ? handleRemoveItem(product.id)
                : console.log("View icon clicked!")
            }
          >
            {showIcon === "trash" ? (
              <FaTrash className="text-gray-600" size={16} />
            ) : (
              <FaEye className="text-gray-600" size={16} />
            )}
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full">
          <button
            className="flex items-center justify-center gap-2 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
            onClick={() => handleAddToCart(product)}
          >
            <CartIcon className="mr-2 h-5 w-5" />
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-gray-800 font-medium text-sm sm:text-base lg:text-lg truncate">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2">
          <p className="text-secondary1 font-bold text-sm sm:text-base lg:text-lg">
            ${product.price}
          </p>
          {product.discountPrice && (
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base line-through">
              ${product.discountPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
