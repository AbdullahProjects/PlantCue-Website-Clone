import React from "react";

const   Feature = ({ title }) => {
  return (
    <div className="feature-highlight px-5 py-3 bg-white shadow-lg rounded-full flex flex-row items-center">
      <div className="feature-dot w-2 h-2 rounded-full bg-primaryLight mr-2"></div>
      <div className="feature-text text-primary text-[12px] font-semibold">
        {title}
      </div>
    </div>
  );
};

export default Feature;
