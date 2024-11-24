import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/LogoIcon";
import SearchIcon from "../../assets/nav/SearchIcon";
import WishListIcon from "../../assets/nav/WishListIcon";
import CartIcon from "../../assets/nav/CartIcon";
import useAuthContext from "../hooks/useAuthProvider";
import UserIcon from "../../assets/UserIcon";
import MallbagIcon from "../../assets/MallbagIcon";
import CancelIcon from "../../assets/CancelIcon";
import ReviewsIcon from "../../assets/ReviewsIcon";
import LogoutIcon from "../../assets/LogoutIcon";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/cart/cartSlice";
import { selectWishlistCount } from "../../redux/wishlist/wishlistSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuth, logout } = useAuthContext();
  const navigate = useNavigate();

  const cartCount = useSelector(selectCartCount);
  const wishlistCount = useSelector(selectWishlistCount);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    navigate("/signup");
  };

  const authRoutes = ["signup", "login"];
  const isAuthRoute = authRoutes.some((route) => pathname.includes(route));

  return (
    <nav className="bg-primary px-4 py-4 flex justify-between items-center border-b border-opacity-50 relative">
      <LogoIcon />

      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:space-x-8 absolute lg:static top-16 left-0 w-full bg-primary lg:w-auto z-10 p-4 lg:p-0`}
      >
        <li>
          <Link to="/" className="block py-2 lg:py-0">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block py-2 lg:py-0">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" className="block py-2 lg:py-0">
            About
          </Link>
        </li>
        {!isAuth && (
          <li>
            <Link to="/signup" className="block py-2 lg:py-0">
              Sign Up
            </Link>
          </li>
        )}
      </ul>

      <div className="hidden lg:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="block px-4 py-2 pl-4 border rounded w-[243px]"
          />
          <button
            type="submit"
            className="absolute top-0 right-0 h-full p-2.5 text-lg font-medium"
          >
            <SearchIcon />
          </button>
        </div>

        {!isAuthRoute && (
          <div className="space-x-2 flex">
            <Link to="/wishlist" className="relative text-2xl">
              <WishListIcon />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-2xl">
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        )}

        {isAuth && (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`text-2xl flex items-center p-2 rounded-full ${
                isDropdownOpen ? "bg-secondary1 text-white" : ""
              }`}
            >
              <UserIcon />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-5 mt-2 w-[225px] bg-black text-white rounded-lg p-2 z-50">
                <Link
                  to="/account"
                  className="flex items-center px-4 py-2 hover:bg-secondary1 rounded"
                >
                  <UserIcon />
                  <span>Manage My Account</span>
                </Link>
                <Link
                  to="/orders"
                  className="flex items-center px-4 py-2 hover:bg-secondary1 rounded"
                >
                  <MallbagIcon />
                  <span>My Orders</span>
                </Link>
                <Link
                  to="/cancellations"
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-secondary1 rounded"
                >
                  <CancelIcon />
                  <span>My Cancellations</span>
                </Link>
                <Link
                  to="/reviews"
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-secondary1 rounded"
                >
                  <ReviewsIcon />
                  <span>My Reviews</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 hover:bg-secondary1 rounded"
                >
                  <LogoutIcon />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
