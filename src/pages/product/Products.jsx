import React, { useState, useEffect } from "react";
import { products } from "../../utils/data";
import ProductCard from "../../components/homepage/flashcard/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [rating, setRating] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [selectedCategory, priceRange, availability, rating]);

  const filteredProducts = products.filter((product) => {
    let matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    let matchesPrice =
      priceRange === "all" ||
      (priceRange === "low" && product.price < 50) ||
      (priceRange === "mid" && product.price >= 50 && product.price <= 150) ||
      (priceRange === "high" && product.price > 150);
    let matchesAvailability =
      availability === "all" ||
      (availability === "in-stock" && product.inStock) ||
      (availability === "out-of-stock" && !product.inStock);
    let matchesRating =
      rating === "all" || Math.floor(product.rating) === parseInt(rating);

    return (
      matchesCategory && matchesPrice && matchesAvailability && matchesRating
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="mb-6">
        <ul className="flex space-x-2 text-gray-500 text-sm">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-700 font-medium">Products</li>
        </ul>
      </nav>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold">All Products</h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          <FontAwesomeIcon icon={faFilter} className="mr-2" />
          <span>Filter</span>
        </button>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 p-4 rounded mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="all">All Categories</option>
              <option value="gaming">Gaming</option>
              <option value="accessories">Accessories</option>
              <option value="furniture">Furniture</option>
              <option value="fashion">Fashion</option>
              <option value="petsupplies">Pet supplies</option>
              <option value="beauty">Beauty</option>
              <option value="toy">Toy</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Price Range
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="all">All Prices</option>
              <option value="low">Below $50</option>
              <option value="mid">$50 - $150</option>
              <option value="high">Above $150</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Availability
            </label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="all">All</option>
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
        </div>
      )}

      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
