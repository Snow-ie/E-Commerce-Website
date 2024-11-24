import React from "react";
import WishlistSection from "../components/wishlist/WishlistSection";
import RecommendedSection from "../components/wishlist/RecommendedSection";
import { wishlistProducts, recommendedProducts } from "../utils/data";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlist/wishlistSlice";

const WishListPage = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist({ id }));
  };

  return (
    <div className="p-8">
      <WishlistSection products={wishlistItems} onRemove={handleRemove} />
      <RecommendedSection products={recommendedProducts} />
    </div>
  );
};

export default WishListPage;
