import React from "react";
import { Outlet } from "react-router";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

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
