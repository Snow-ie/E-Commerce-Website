import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faEmptyStar,
} from "@fortawesome/free-solid-svg-icons";
import MainProduct from "../assets/images/MainProduct.svg";
import Controller1 from "../assets/images/Controller1.svg";
import Controller2 from "../assets/images/Controller2.svg";
import Controller3 from "../assets/images/Controller3.svg";
import Controller4 from "../assets/images/Controller4.svg";
import DeliveryIcon from "../assets/product/DeliveryIcon";
import ReturnIcon from "../assets/product/ReturnIcon";
import WishListIcon from "../assets/nav/WishListIcon";
import ProductCard from "../components/homepage/flashcard/ProductCard";
import { products } from "../utils/data";
import RectangleIcon from "../assets/RectangleIcon";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("M");
  const rating = 4.5;

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
            className="text-yellow-500 text-lg mr-1"
          />
        );
      } else if (i - rating <= 0.5) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalfAlt}
            className="text-yellow-500 text-lg mr-1"
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
            <Link to="/gaming" className="hover:underline">
              Gaming
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-700">Havic HV G-92 Gamepad</li>
        </ul>
      </nav>

      <div className="flex flex-col lg:flex-row mt-8 gap-8">
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:gap-2 justify-between">
            {[Controller1, Controller2, Controller3, Controller4].map(
              (img, index) => (
                <div key={index} className="p-3 rounded-md bg-secondary4">
                  <img
                    src={img}
                    alt={`Product view ${index + 1}`}
                    loading="lazy"
                    className="w-[80px] h-[80px] lg:w-[121px] lg:h-[114px]"
                  />
                </div>
              )
            )}
          </div>

          <div className="flex-1 lg:ml-8">
            <div className="p-2 rounded-md bg-secondary4">
              <img
                src={MainProduct}
                alt="Main Product"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
          <div className="flex items-center my-2">
            {renderStars()}
            <span className="text-gray-600">(150 Reviews)</span>
            <span className="ml-4 text-button1 text-sm">In Stock</span>
          </div>

          <p className="text-2xl mb-4">$192.00</p>
          <p className="text-sm mb-6">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal. Pressure
            sensitive.
          </p>

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
                      : "bg-primary text-primary2"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="border flex">
              <button
                onClick={decreaseQuantity}
                className="px-4 py-2 rounded-l hover:bg-hoverbutton"
              >
                -
              </button>
              <span className="px-4 py-2 border-r border-l">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-4 py-2 rounded-r hover:bg-hoverbutton"
              >
                +
              </button>
            </div>
            <button className="ml-4 px-6 py-2 bg-secondary1 text-white rounded">
              Buy Now
            </button>
            <button className="ml-2 px-4 py-2 border rounded hover:bg-hoverbutton">
              <WishListIcon />
            </button>
          </div>

          <div className="border p-4 w-full max-w-md">
            <div className="flex sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <DeliveryIcon />
              <div className="ml-4">
                <h4 className="font-medium">Free Delivery</h4>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center border-t pt-4">
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

      <div className="flex items-center gap-6 mt-8">
        <RectangleIcon />
        <h4 className="text-secondary1">Related Items</h4>
      </div>
      <ul className="flex items-center gap-5 w-full py-[70px] overflow-x-auto">
        {products.map((product) => (
          <li key={product.id} className="min-w-[200px] md:min-w-[350px]">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
