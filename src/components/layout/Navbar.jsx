import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

const authRoutes = ["signup", "login"];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuth } = useAuthContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isAuthRoute = authRoutes.some((route) => pathname.includes(route));

  return (
    <nav className="bg-primary px-8 py-4 flex justify-between items-center border-b border-opacity-50 relative">
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

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:space-x-8 absolute lg:static top-16 left-0 w-full bg-primary lg:w-auto z-10 p-4 lg:p-0`}
      >
        <li>
          <Link to="/" className="text-primary1 block py-2 lg:py-0">
            Home
          </Link>
          {pathname === "/" ? <hr /> : <></>}
        </li>

        <li>
          <Link to="/contact" className="block py-2 lg:py-0">
            Contact
          </Link>
          {pathname.includes("contact") ? <hr /> : <></>}
        </li>

        <li>
          <Link to="/about" className="block py-2 lg:py-0">
            About
          </Link>
          {pathname.includes("about") ? <hr /> : <></>}
        </li>

        {!isAuth && (
          <li>
            <Link to="/signup" className="block py-2 lg:py-0">
              Sign Up
            </Link>
            {pathname.includes("signup") ? <hr /> : <></>}
          </li>
        )}
      </ul>

      <div className="hidden lg:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="block px-4 py-2 pl-4 border rounded w-[243px] group-hover:w-[300px] transition-all duration-300"
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
            <button className="text-2xl">
              <WishListIcon />
            </button>
            <button className="text-2xl">
              <CartIcon />
            </button>
          </div>
        )}
        {isAuth && (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`text-2xl flex items-center focus:outline-none rounded-full p-2 transition-colors ${
                isDropdownOpen ? "bg-secondary1 text-white" : ""
              }`}
            >
              <UserIcon />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-5 mt-2 w-[225px] h-[208px] bg-blur bg-black text-white rounded-lg  p-2 z-50">
                <Link
                  to="/account"
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-secondary1 rounded"
                >
                  <UserIcon />
                  <span>Manage My Account</span>
                </Link>
                <Link
                  to="/orders"
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-secondary1 rounded"
                >
                  <MallbagIcon />
                  <span>My Order</span>
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
                <Link
                  to="/logout"
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-secondary1 rounded"
                >
                  <LogoutIcon />
                  <span>Logout</span>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;