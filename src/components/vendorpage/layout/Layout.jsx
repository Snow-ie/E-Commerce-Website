import React from "react";
import VendorSidebar from "./VendorSidebar";
import VendorNavbar from "./VendorNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex ">
      <div className="">
        <VendorSidebar />
      </div>
      <div className=" flex flex-col w-full md:ml-64 p-4">
        <VendorNavbar />
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
