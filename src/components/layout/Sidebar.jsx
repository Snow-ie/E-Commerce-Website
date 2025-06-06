import React, { useState, useEffect, useRef } from "react";
import DropDownIcon from "../../assets/DropDownIcon";

const Sidebar = () => {
  const [isWomensOpen, setIsWomensOpen] = useState(false);
  const [isMensOpen, setIsMensOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleDropdown = (setState) => {
    setState((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest("#sidebarToggleBtn")
      ) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      <button
        id="sidebarToggleBtn"
        className="fixed top-10 left-0 p-2 bg-red-500 text-white hover:bg-red-600 transition-all duration-300 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-2 h-2"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
            <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" />
            <line x1="8" y1="16" x2="16" y2="8" stroke="currentColor" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-2 h-2 "
          >
            <path
              fillRule="evenodd"
              d="M3 5h18a1 1 0 010 2H3a1 1 0 110-2zm0 6h18a1 1 0 010 2H3a1 1 0 110-2zm0 6h18a1 1 0 010 2H3a1 1 0 110-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      <div
        ref={sidebarRef}
        className={`fixed bg-primary p-2 border-r border-primary1 border-opacity-50 transform z-40
          ${
            isSidebarOpen ? "left-0" : "-left-[100vw]"
          } transition-all duration-300
          md:relative md:left-0 md:block w-screen md:w-[217px] md:h-auto`}
      >
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => toggleDropdown(setIsWomensOpen)}
              className="w-full px-3 py-2 rounded-lg text-left bg-white hover:bg-secondary1 hover:text-white flex justify-between items-center shadow-md transition-all duration-200"
            >
              <span className="font-medium">Woman's Fashion</span>
              <DropDownIcon />
            </button>
            {isWomensOpen && (
              <ul className="pl-4 mt-2 space-y-1">
                <li className="hover:text-secondary1 hover:text-opacity-40">
                  <a href="#">Dresses</a>
                </li>
                <li className="hover:text-secondary1 hover:text-opacity-40">
                  <a href="#">Tops</a>
                </li>
                <li className="hover:text-secondary1 hover:text-opacity-40">
                  <a href="#">Shoes</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleDropdown(setIsMensOpen)}
              className="w-full px-3 py-2 rounded-lg text-left bg-white hover:bg-secondary1 hover:text-white flex justify-between items-center shadow-md transition-all duration-200"
            >
              <span className="font-medium">Men's Fashion</span>
              <DropDownIcon />
            </button>
            {isMensOpen && (
              <ul className="pl-4 mt-2 space-y-1">
                <li className="hover:text-secondary1 hover:text-opacity-40">
                  <a href="#">Shirts</a>
                </li>
                <li className="hover:text-secondary1 hover:text-opacity-40">
                  <a href="#">Pants</a>
                </li>
                <li className="hover:text-secondary1 hover:text-opacity-40">
                  <a href="#">Shoes</a>
                </li>
              </ul>
            )}
          </li>

          {[
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-secondary1 hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
