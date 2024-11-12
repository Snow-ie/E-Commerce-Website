import React, { useState } from "react";
import MoneybagIcon from "../../assets/about/MoneybagIcon";
import SaleIcon from "../../assets/about/SaleIcon";
import ShopIcon from "../../assets/about/ShopIcon";
import ShoppingIcon from "../../assets/about/ShoppingIcon";

const StatsCard = ({ icon, value, label, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center justify-center p-6 border cursor-pointer rounded-md shadow-md  ${
      isSelected ? "bg-secondary1 text-primary" : "bg-primary :text-black"
    }`}
  >
    <div className="relative">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
          isSelected ? "bg-primary" : "bg-circle"
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            !isSelected
              ? "text-primary bg-primary2"
              : "text-primary2 bg-primary"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
    <h2 className="text-[30px] font-bold">{value}</h2>
    <p className="text-sm mt-1 text-center">{label}</p>
  </div>
);

const Stats = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const statsData = [
    {
      id: 0,
      icon: <ShopIcon className="w-6 h-6 " />,
      value: "10.5k",
      label: "Sellers active on our site",
    },
    {
      id: 1,
      icon: <SaleIcon className="w-6 h-6" />,
      value: "33k",
      label: "Monthly Product Sale",
    },
    {
      id: 2,
      icon: <MoneybagIcon className="w-6 h-6" />,
      value: "45.5k",
      label: "Customers active on our site",
    },
    {
      id: 3,
      icon: <ShoppingIcon className="w-6 h-6" />,
      value: "25k",
      label: "Annual gross sale on our site",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-[70px] ">
      {statsData.map((item) => (
        <StatsCard
          key={item.id}
          icon={item.icon}
          value={item.value}
          label={item.label}
          isSelected={selectedCard === item.id}
          onClick={() => setSelectedCard(item.id)}
        />
      ))}
    </div>
  );
};

export default Stats;
