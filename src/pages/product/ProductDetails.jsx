import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faEmptyStar,
} from "@fortawesome/free-solid-svg-icons";
import DeliveryIcon from "../../assets/product/DeliveryIcon";
import ReturnIcon from "../../assets/product/ReturnIcon";
import WishListIcon from "../../assets/nav/WishListIcon";

import { products } from "../../utils/data";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("M");
  const { id } = useParams();
  const product = products.find((prod) => prod.id === Number(id));
  const rating = 4.5;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-secondary2 text-lg mr-1"
          />
        );
      } else if (i - rating <= 0.5) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            className="text-secondary2 text-lg mr-1"
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faEmptyStar}
            className="text-gray-300 text-lg mr-1"
          />
        );
      }
    }
    return stars;
  };

  if (!product) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-xl font-bold text-secondary1">Product not found</h1>
        <p>It seems the product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <nav className="mb-6 text-sm text-gray-500">
        <ul className="flex space-x-2">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/details" className="hover:underline">
              View Product
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-700">{product.name}</li>
        </ul>
      </nav>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <div className="w-full max-w-xs lg:w-1/2 lg:max-w-md mx-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex-1 lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <div className="flex items-center mb-2">
            {renderStars()}
            <span className="text-gray-600 ml-2">
              ({product.reviews} Reviews)
            </span>
            <span className="ml-4 text-button1 text-sm">In Stock</span>
          </div>
          <p className="text-2xl text-gray-800 mb-4">${product.price}</p>
          <p className="text-sm text-gray-600 mb-6">{product.description}</p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Colours:</h3>
            <div className="flex space-x-2">
              {["white", "black"].map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full ${
                    selectedColor === color ? "ring-2 ring-gray-500" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Size:</h3>
            <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded ${
                    selectedSize === size
                      ? "bg-secondary1 text-white"
                      : "bg-primary text-gray-800 border border-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex border">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 rounded-l hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 py-2 border-r border-l">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 rounded-r hover:bg-gray-200"
              >
                +
              </button>
            </div>
            <button className="px-6 py-2 bg-secondary1 text-white rounded">
              Buy Now
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-200">
              <WishListIcon />
            </button>
          </div>

          <div className="border p-4 rounded-lg">
            <div className="flex items-start mb-4">
              <DeliveryIcon />
              <div className="ml-4">
                <h4 className="font-medium">Free Delivery</h4>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-start border-t pt-4">
              <ReturnIcon />
              <div className="ml-4">
                <h4 className="font-medium">Return Delivery</h4>
                <p>
                  Free 30 Days Delivery Returns.{" "}
                  <a href="#" className="border-b cursor-pointer">
                    Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
