import React from "react";

const CancelIcon = () => {
  return (
    <div>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_969_458)">
          <path
            d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="12" cy="12" r="11.25" stroke="white" stroke-width="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_969_458">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default CancelIcon;
