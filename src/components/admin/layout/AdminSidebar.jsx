import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { adminSidebarItems } from "../../../utils/data";
import LogoIcon from "../../../assets/LogoIcon";
import { Link, NavLink, useLocation } from "react-router-dom";

import { cn } from "../../../utils";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState("Dashboard");

  const location = useLocation();

  useEffect(() => {
    setActiveLocation(location.pathname);
  }, [location.pathname]);

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed flex h-screen">
      <div
        className={` top-0 left-0 bg-gray-50 w-64 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="mb-8">
            <Link className="flex items-center">
              <LogoIcon />
            </Link>
          </div>

          <nav className="flex-1 space-y-2">
            <ul className="space-y-2">
              {adminSidebarItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={`flex items-center w-full px-4 py-3 text-left text-gray-600 hover:bg-orange-50 hover:text-orange-500 rounded-lg ${
                      activeLocation === item.path
                        ? "bg-orange-100 text-orange-500 shadow-md"
                        : ""
                    }`}
                    onClick={handleItemClick}
                  >
                    <span className="text-lg mr-3">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <button
        className={cn("lg:hidden px-1  text-gray-700 absolute top-2  z-50", {
          "right-4": isOpen,
          "left-4": !isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  );
};

export default AdminSidebar;
