import React from "react";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { FaStethoscope, FaCheck } from "react-icons/fa6";
import { RiHeartFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

const AppFeatures = () => {
  const allFeatures = [
    {
      heading: "AI Plant Identification",
      subheading: "Identify 400,000+ plants with 98% accuracy using advanced AI technology",
      icon: <HiMagnifyingGlassPlus className="text-white text-[20px]" />,
      features: [
        "Instant species recognition",
        "Scientific & common names",
        "Native habitat info",
      ],
      gradientStart: "#6EE7B7",
      gradientEnd: "#34D399",
    },
    {
      heading: "Health Diagnosis",
      subheading: "Diagnose plant diseases, pests, and nutrient deficiencies instantly",
      icon: <FaStethoscope className="text-white text-[20px]" />,
      features: [
        "Disease detection",
        "Pest identification",
        "Treatment recommendations",
      ],
      gradientStart: "#F87171",
      gradientEnd: "#DC2626",
    },
    {
      heading: "Smart Care Reminders",
      subheading: "Personalized watering, fertilizing, and repotting schedules",
      icon: <IoNotifications className="text-white text-[20px]" />,
      features: [
        "Custom watering alerts",
        "Fertilizer notifications",
        "Seasonal care tips",
      ],
      gradientStart: "#60A5FA",
      gradientEnd: "#2563EB",
    },
    {
      heading: "Digital Plant Journal",
      subheading: "Track growth, log care activities, and save plant memories",
      icon: <FaBook className="text-white text-[20px]" />,
      features: [
        "Growth photo timeline",
        "Care activity logs",
        "Progress analytics",
      ],
      gradientStart: "#C084FC",
      gradientEnd: "#9333EA",
    },
    {
      heading: "Plant Community",
      subheading: "Connect with millions of plant lovers worldwide",
      icon: <IoPeopleSharp className="text-white text-[20px]" />,
      features: [
        "Share plant photos",
        "Get expert advice",
        "Join plant challenges",
      ],
      gradientStart: "#FACC15",
      gradientEnd: "#EA580C",
    },
    {
      heading: "Show Your Plant Love",
      subheading: "Share your green journey and spread the plant love with your community",
      icon: <RiHeartFill className="text-white text-[20px]" />,
      features: [
        "Share beautiful moments",
        "Inspire other plant parents",
        "Celebrate plant milestones",
      ],
      gradientStart: "#F472B6",
      gradientEnd: "#EF4444",
    },
  ];

  return (
    <div className="app-features mt-12">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-[30px] lg:text-[40px] font-bold mt-8 text-center">
          Everything You Need
        </h1>
        <p className="w-[70%] lg:w-[40%] text-textLight text-[14px] lg:text-[15px] mt-2 text-center">
          Complete plant care toolkit in your pocket
        </p>
        <div className="all-features grid grid-cols-1 lg:grid-cols-2 mt-12 gap-6">
          {allFeatures.map((feature, index) => (
            <div
              key={index}
              className="single-feature hover:scale-102 transition-all duration-300 flex flex-col items-start bg-linear-to-r from-[#FFFFFF] to-[#F5F5E9] rounded-xl shadow-lg px-8 py-8"
            >
              <div
                className="icon flex items-center justify-center p-4 rounded-xl"
                style={{
                  background: `linear-gradient(to right, ${feature.gradientStart}, ${feature.gradientEnd})`,
                }}
              >
                {feature.icon}
              </div>
              <h1 className="text-[18px] lg:text-[20px] font-bold text-start mt-4">
                {feature.heading}
              </h1>
              <p className="w-[80%] text-textLight text-[13px] lg:text-[14px] text-start mt-1">
                {feature.subheading}
              </p>
              <div className="feature-list mt-4">
                {feature.features.map((singleFeature, idx) => (
                  <div
                    key={idx}
                    className="single-feature-list flex flex-row gap-2"
                  >
                    {index === allFeatures.length - 1 ? (
                      <RiHeartFill className="text-[#EC4899] text-[16px]" />
                    ) : (
                      <FaCheck className="text-[#22C55E] text-[16px]" />
                    )}
                    <p className="text-textLight text-[13px]">
                      {singleFeature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
