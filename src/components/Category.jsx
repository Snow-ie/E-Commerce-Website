import { useState, useRef } from "react";
import RectangleIcon from "../assets/RectangleIcon";
import FillRightArrow from "../assets/FillRightArrow";
import FillLeftArrow from "../assets/FillLeftArrow";
import { categories } from "../utils/data";

function Category() {
  const [selectedIndex, setSelectedIndex] = useState(3);
  const categoryRef = useRef(null);

  const scrollLeft = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <div className="lg:flex lg:items-end  ">
        <header className="space-y-4 lg:w-1/3">
          <div className="flex items-center gap-4 mt-6">
            <RectangleIcon />
            <p className="text-secondary1 font-base sm:text-lg">Categories</p>
          </div>
          <h2 className="text-2xl font-bold">Browse By Category</h2>
        </header>
        <div className="inline-flex items-center md:justify-end gap-4 lg:w-2/3">
          <div className="flex">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
              <FillLeftArrow />
            </button>
          </div>
          <div className="flex">
            <button
              onClick={scrollRight}
              className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
            >
              <FillRightArrow />
            </button>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div
          className="flex items-center gap-[30px] w-full mt-2 overflow-x-auto scrollbar scrollbar-h-1 mb-6"
          ref={categoryRef}
        >
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`flex flex-col items-center justify-center min-w-[170px] h-[145px] border-2 rounded-lg cursor-pointer transition duration-300 transform ${
                index === selectedIndex
                  ? "bg-secondary1 text-primary scale-105 shadow-lg"
                  : "text-primary2 hover:scale-105 hover:shadow-md"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="flex items-center text-3xl">{category.icon}</div>
              <p className="mt-2 font-base">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
