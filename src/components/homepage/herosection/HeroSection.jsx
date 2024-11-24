import React from "react";

import Banner from "../herosection/Banner";
import Sidebar from "../../layout/Sidebar";

const HeroSection = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Banner />
    </div>
  );
};

export default HeroSection;
