import React, { useState, useEffect, useRef } from "react";
import Avatar from "../../../assets/images/Avatar.svg";
import BellIcon from "../../../assets/dashboard/BellIcon";
import MenuIcon from "../../../assets/dashboard/MenuIcon";

const VendorNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleItemClick = () => {
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.tagName !== "BUTTON"
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex md:justify-between justify-end items-center">
      <h2 className="md:block hidden text-2xl font-medium">Overview</h2>
      <div className="relative flex items-center gap-3">
        <h2 className="block md:hidden text-2xl font-medium">Overview</h2>
        <button>
          <BellIcon />
        </button>
        <img src={Avatar} alt="Profile" className="rounded-full w-10 h-10" />
        <button onClick={toggleDropdown}>
          <MenuIcon />
        </button>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-12 w-48 bg-white shadow-md rounded-md p-2"
          >
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleItemClick}
              >
                Profile
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleItemClick}
              >
                Settings
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleItemClick}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorNavbar;
