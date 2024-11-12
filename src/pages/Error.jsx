import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 ">
      <div className="text-sm mt-4">
        Home / <span>404 Error</span>
      </div>
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="text-6xl font-medium mb-4">404 Not Found</h1>
        <p className="text-gray-500 mt-8">
          Your visited page not found. You may go home page.
        </p>
        <button
          onClick={handleBackHome}
          className="px-6 py-2 bg-secondary1 text-white rounded-lg hover:bg-secondary1 mt-8"
        >
          Back to home page
        </button>
      </div>
    </div>
  );
};

export default Error404;
