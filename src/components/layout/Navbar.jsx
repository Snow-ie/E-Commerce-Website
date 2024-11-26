import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthContext from "../hooks/useAuthProvider";
import LogoIcon from "../../assets/LogoIcon";
import SearchIcon from "../../assets/nav/SearchIcon";
import WishListIcon from "../../assets/nav/WishListIcon";
import CartIcon from "../../assets/nav/CartIcon";
import UserIcon from "../../assets/UserIcon";
import MallbagIcon from "../../assets/MallbagIcon";
import CancelIcon from "../../assets/CancelIcon";
import ReviewsIcon from "../../assets/ReviewsIcon";
import LogoutIcon from "../../assets/LogoutIcon";
import { selectCartCount } from "../../redux/cart/cartSlice";
import { selectWishlistCount } from "../../redux/wishlist/wishlistSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuth, logout } = useAuthContext();
  const cartCount = useSelector(selectCartCount);
  const wishlistCount = useSelector(selectWishlistCount);

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const handleLogout = () => {
    logout();
    navigate("/signup");
  };

  const handleInputChange = (e) => setSearchText(e.target.value);
  const handleSearch = () => {
    if (!searchText.trim()) {
      alert("Please enter a search term.");
      return;
    }
    console.log("Searching for:", searchText);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const authRoutes = ["signup", "login"];
  const isAuthRoute = authRoutes.some((route) => pathname.includes(route));

  return (
    <nav className="bg-primary px-4 py-4 flex justify-between items-center border-b border-opacity-50 relative">
      <Link to="/">
        <LogoIcon aria-label="Logo" />
      </Link>

      {/* Hamburger Menu */}
      <button
        onClick={toggleMenu}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
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
        id="navbar-default"
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

      {/* Right Section */}
      <div className="hidden lg:flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            placeholder="What are you looking for?"
            className={`block px-4 py-2 pl-4 border rounded w-[243px] ${
              searchText ? "border-secondary1" : "border-gray-300"
            } focus:ring focus:ring-blue-200 focus:outline-none`}
          />
          <button
            type="button"
            onClick={handleSearch}
            className="absolute top-0 right-0 h-full p-2.5 text-lg font-medium bg-secondary1 text-white rounded-r"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </div>

        {/* Icons */}
        {!isAuthRoute && (
          <div className="space-x-2 flex">
            <Link
              to="/wishlist"
              className="relative text-2xl"
              aria-label="Wishlist"
            >
              <WishListIcon />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-2xl" aria-label="Cart">
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs w-3 h-3 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        )}

        {/* User Dropdown */}
        {isAuth && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`text-2xl flex items-center p-2 rounded-full ${
                isDropdownOpen ? "bg-secondary1 text-white" : ""
              }`}
              aria-expanded={isDropdownOpen}
              aria-label="User menu"
            >
              <UserIcon />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-5 mt-2 w-[225px] bg-black text-white rounded-lg p-2 z-50">
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded ${
                      isActive
                        ? "bg-secondary1 text-white"
                        : "hover:bg-hoverbutton"
                    }`
                  }
                >
                  <UserIcon />
                  <span>Manage My Account</span>
                </NavLink>
                <NavLink
                  to="/orders"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded ${
                      isActive
                        ? "bg-secondary1 text-white"
                        : "hover:bg-hoverbutton"
                    }`
                  }
                >
                  <MallbagIcon />
                  <span>My Orders</span>
                </NavLink>
                <NavLink
                  to="/cancellations"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded ${
                      isActive
                        ? "bg-secondary1 text-white"
                        : "hover:bg-hoverbutton"
                    }`
                  }
                >
                  <CancelIcon />
                  <span>My Cancellations</span>
                </NavLink>
                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-2 rounded ${
                      isActive
                        ? "bg-secondary1 text-white"
                        : "hover:bg-hoverbutton"
                    }`
                  }
                >
                  <ReviewsIcon />
                  <span>My Reviews</span>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full space-x-2 px-4 py-2 hover:bg-hoverbutton rounded"
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
