import React from "react";
import { IoInfinite } from "react-icons/io5";

const PricingCard = ({
  title,
  description,
  price,
  priceUnit,
  buttonText,
  footerText,
  footerTextColor = "text-primary/60",
  icon,
  iconGradientStart,
  iconGradientEnd,
  isLifeTime = false,
  isHighlighted = false,
  originalPrice,
  monthlyEquivalent,
  saveText,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center relative ${
        isHighlighted ? "border-3 border-primary" : ""
      }`}
    >
      {/* Top Right Badge */}
      {isLifeTime && (
        <div className="absolute -top-2 -right-2 bg-linear-to-l from-[#F97316] to-[#FACC15] p-1.5 rounded-full flex items-center justify-center">
          <IoInfinite className="text-white text-[14px]" />
        </div>
      )}

      {/* Main Icon */}
      <div
        className={`rounded-xl flex items-center justify-center mb-3 p-4`}
        style={{
          background: `linear-gradient(to right, ${iconGradientStart}, ${iconGradientEnd})`,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-primary text-xl font-bold mb-2">{title}</h3>

      {/* Description */}
      <div className="text-primary/70 text-sm mb-4 text-center">
        {description}
      </div>

      {/* Price */}
      <div className="flex flex-col items-center mb-6">
        {originalPrice && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-primary/50 text-[15px] line-through">
              {originalPrice}
            </span>
          </div>
        )}
        <span className="text-primary text-3xl font-bold">{price}</span>
        {priceUnit && (
          <span className="text-primary/70 text-sm">{priceUnit}</span>
        )}
        {monthlyEquivalent && (
          <span className="text-primary/70 text-xs mt-1">
            {monthlyEquivalent}
          </span>
        )}
      </div>

      {/* Button */}
      <button className="w-full bg-linear-to-l from-primaryLight to-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 hover:cursor-pointer transition-colors mb-3">
        {buttonText}
      </button>

      {/* Footer Text */}
      {footerText && (
        <p className={`${footerTextColor} text-xs text-center`}>{footerText}</p>
      )}

      {/* Save Text */}
      {saveText && (
        <p className="text-[#16A34A] font-semibold text-xs text-center">
          {"💰  " + saveText}
        </p>
      )}
    </div>
  );
};

export default PricingCard;
