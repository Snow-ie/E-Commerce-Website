import React from "react";

const steps = [
  { id: 1, label: "Account Info", active: true },
  { id: 2, label: "Address", active: false },
  { id: 3, label: "Payment Options", active: false },
];

const ProgressBar = () => {
  return (
    <div className="flex items-center justify-center p-[70px] space-x-4">
      {steps.map((step, index) => (
        <div className="flex items-center space-x-2" key={step.id}>
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step.active
                ? "bg-secondary1 text-white"
                : "bg-gray-300 text-gray-500"
            }`}
          ></div>

          <span
            className={`font-medium ${
              step.active ? "text-secondary1" : "text-gray-500"
            }`}
          >
            {step.label}
          </span>

          {index < steps.length - 1 && (
            <div
              className={`w-8 h-[2px] ${
                step.active ? "bg-secondary1" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
