import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

const Layout = () => {
  return (
    <div className="flex ">
      <div className="">
        <AdminSidebar />
      </div>
      <div className=" flex flex-col w-full md:ml-64 p-4">
        <AdminNavbar />
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
