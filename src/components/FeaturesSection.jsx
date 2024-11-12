import React from "react";
import DeliveryIcon from "../assets/featuresection/DeliveryIcon";
import CustomerServiceIcon from "../assets/featuresection/CustomerServiceIcon";
import SecureIcon from "../assets/featuresection/SecureIcon";

const FeaturesSection = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 pb-[80px]">
        <div className="flex flex-col md:flex-row justify-center items-center my-6 gap-[88px]">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-circle flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary2 flex items-center justify-center">
                  <DeliveryIcon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-sm  mt-2">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-circle flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary2 flex items-center justify-center">
                  <CustomerServiceIcon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-sm  mt-2">Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-circle flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary2 flex items-center justify-center">
                  <SecureIcon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">MONEY BACK GUARANTEE</h3>
            <p className="text-sm  mt-2">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
