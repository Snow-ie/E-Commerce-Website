import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { addToCart } from "../../redux/cart/cartSlice";
import { removeFromWishlist } from "../../redux/wishlist/wishlistSlice";
import { toast } from "react-toastify";

const ITEMS_PER_PAGE = 8;

const WishlistSection = ({ products }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleMoveAllToCart = () => {
    products.forEach((product) => {
      dispatch(addToCart(product));
      toast.success(`${product.name} added to the cart`);
    });

    products.forEach((product) => {
      dispatch(removeFromWishlist({ id: product.id }));
    });

    toast.success("All items moved to the bag!");
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto p-4 mb-[70px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Wishlist ({totalItems})</h2>
        <button
          onClick={handleMoveAllToCart}
          className="text-sm bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Move All To Bag
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {paginatedProducts.map((product, index) => (
          <ProductCard key={index} product={product} showIcon="trash" />
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WishlistSection;
