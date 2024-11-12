import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
