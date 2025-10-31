import React from "react";
import { FaCrown } from "react-icons/fa6";

const Feature = ({ title }) => {
  return (
    <div className="feature-highlight px-5 py-3 bg-white shadow-lg rounded-full flex flex-row items-center">
      <div className="feature-dot w-2 h-2 rounded-full bg-primaryLight mr-2"></div>
      <div className="feature-text text-primary text-[12px] font-semibold">
        {title}
      </div>
    </div>
  );
};

const FeatureDark = ({ title }) => {
  return (
    <div className="feature-highlight px-6 py-3 bg-white/20 border border-white/20 rounded-full flex flex-row items-center">
      <div className="feature-dot w-2 h-2 rounded-full bg-primary/30 mr-2"></div>
      <div className="feature-text text-white text-[12px] font-medium">
        {title}
      </div>
    </div>
  );
};

const FeaturePremium = ({ title }) => {
  return (
    <div className="feature-highlight px-6 py-3 bg-white/90 border border-white/20 rounded-full flex flex-row items-center">
      <FaCrown className="text-primary mr-2" />
      <div className="feature-text text-primary text-[12px] font-medium">
        {title}
      </div>
    </div>
  );
};

export default Feature;
export { FeatureDark, FeaturePremium };
