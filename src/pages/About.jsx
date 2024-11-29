import React from "react";
import TwoAfrican from "../assets/images/TwoAfrican.svg";
import Statcard from "../components/about/StatCard";
import FeaturesSection from "../components/FeaturesSection";
import Team from "../components/about/Team";

const About = () => {
  return (
    <div className="container mx-auto px-4  ">
      <nav aria-label="Breadcrumb" className="text-sm mt-5 text-gray-600">
        <ol className="list-none flex space-x-2">
          <li>
            <a href="/" className="hover:underline text-gray-700">
              Home
            </a>
          </li>
          <li>/</li>
          <li className="text-black font-medium">About</li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 mt-12 pb-[70px]">
        <div className="">
          <h1 className="text-4xl font-semibold mt-10">Our Story</h1>
          <p className="text-base mt-6">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="mt-4 text-base">
            Exclusive has more than 1 million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer...
          </p>
        </div>
        <div>
          <img
            src={TwoAfrican}
            alt="Our Story"
            loading="lazy"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <Statcard />
      <Team />
      <FeaturesSection />
    </div>
  );
};

export default About;
