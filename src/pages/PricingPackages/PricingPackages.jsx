import React from "react";
import { FeaturePremium } from "../../components/Feature/Feature";
import Images from "../../utils/images";
import PricingCard from "./components/PricingCard";
import { FaCalendar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { IoInfinite } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaStethoscope } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { MdDeleteOutline } from "react-icons/md";
import { FaRotateLeft } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { FaRotate } from "react-icons/fa6";

const PricingPackages = () => {
  return (
    <div
      className="plantcue-assistant mt-30 relative bg-cover bg-top"
      style={{ backgroundImage: `url(${Images.pricingPackagesBg})` }}
    >
      {/* Bg Gradient */}
      <div className="overlay-gradient-container absolute inset-0 bg-linear-to-r from-primaryLight/90 to-primaryLight/80"></div>

      {/* Content */}
      <div className="container relative py-20 z-10 w-full flex flex-col items-center">
        {/* Badge */}
        <div className="mb-4">
          <FeaturePremium title="Premium Plant Care" />
        </div>

        {/* Heading & Subheading */}
        <h1 className="text-primary text-[30px] lg:text-[40px] font-bold mt-4 text-center">
          Simple Plans
        </h1>
        <p className="w-[70%] lg:w-[50%] text-primary/80 text-[14px] lg:text-[16px] mt-2 text-center mb-12">
          Choose the perfect plan for your plant journey and unlock the full
          power of AI-driven plant care
        </p>

        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 px-4">
          {/* Weekly Plan */}
          <PricingCard
            title="Weekly"
            description="Perfect for trying out"
            price="$3.99"
            priceUnit="per week"
            buttonText="Start Free Trial"
            footerText="3 days free, then $2.99/week"
            icon={<FaCalendar className="text-white text-[18px]" />}
            iconGradientStart={"#2563EB"}
            iconGradientEnd={"#60A5FA"}
          />

          {/* Monthly Plan */}
          <PricingCard
            title="Monthly"
            description="Most flexible option"
            price="$9.99"
            priceUnit="per month"
            buttonText="Choose Monthly"
            footerText="Cancel anytime"
            icon={<FaCalendar className="text-white text-[18px]" />}
            iconGradientStart={"#16A34A"}
            iconGradientEnd={"#4ADE80"}
          />

          {/* Yearly Plan - Best Value */}
          <PricingCard
            title="Yearly"
            description={"Best value - Save 71%"}
            price="$34.99"
            originalPrice="$119.88"
            monthlyEquivalent="$2.92/month billed yearly"
            buttonText="Get Best Deal"
            saveText="Save $84.89 per year"
            icon={<FaStar className="text-white text-[18px]" />}
            iconGradientStart={"#A4D8A5"}
            iconGradientEnd={"#124A2F"}
            isHighlighted={true}
          />

          {/* Lifetime Plan */}
          <PricingCard
            title="Lifetime"
            description="One-time payment"
            price="$99"
            priceUnit="forever access"
            buttonText="Buy Lifetime"
            footerText="Never pay again"
            footerTextColor="text-purple-600"
            icon={<FaCrown className="text-white text-[18px]" />}
            iconGradientStart={"#9333EA"}
            iconGradientEnd={"#C084FC"}
            isLifeTime={true}
          />
        </div>

        {/* Bottom Sections */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 mb-12">
          {/* Premium Features Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full bg-primaryLight flex items-center justify-center mr-3">
                <div className="rounded-xl bg-linear-to-l from-primary to-primaryLight flex items-center justify-center p-3">
                  <FaCheckCircle className="text-white text-[15px]" />
                </div>
              </div>
              <h2 className="text-primary text-2xl font-bold">
                Premium Features
              </h2>
            </div>
            <div className="space-y-3">
              {/* Unlimited Plant Scans */}
              <PremiumFeature
                icon={<IoInfinite className="text-white text-[14px]" />}
                iconBg={"#22C55E"}
                title={"Unlimited Plant Scans"}
                description={
                  "Identify any plant, anytime, anywhere with our advanced AI"
                }
              />

              {/* AskCue AI Assistant */}
              <PremiumFeature
                icon={<FaRobot className="text-white text-[14px]" />}
                iconBg={"#3B82F6"}
                title={"AskCue AI Assistant"}
                description={
                  "24/7 expert plant advice from your personal AI botanist"
                }
              />

              {/* Smart Care Reminders */}
              <PremiumFeature
                icon={<IoNotifications className="text-white text-[14px]" />}
                iconBg={"#A855F7"}
                title={"Smart Care Reminders"}
                description={
                  "Personalized watering, fertilizing & repotting schedules"
                }
              />

              {/* Health Diagnosis */}
              <PremiumFeature
                icon={<FaStethoscope className="text-white text-[14px]" />}
                iconBg={"#EF4444"}
                title={"Health Diagnosis"}
                description={
                  "Detect diseases, pests & nutrient deficiencies instantly"
                }
              />
            </div>
          </div>

          {/* Risk-Free Guarantee Section */}
          <div className="bg-primary rounded-2xl shadow-lg p-8 text-white flex flex-col items-center">
            <div className="flex items-center flex-col mb-3 gap-3">
              <div className="rounded-full bg-white/20 flex items-center justify-center p-4">
                <SiAdguard className="text-white text-[18px]" />
              </div>
              <h2 className="text-white text-2xl font-bold">
                Risk-Free Guarantee
              </h2>
            </div>
            <p className="text-white/90 text-sm mb-6">
              Try PlantCue Premium with complete confidence
            </p>
            <div className="space-y-3 mb-8 mt-2 self-start">
              {/* 3-day free trial */}
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <MdDeleteOutline className="text-white text-[14px]" />
                </div>
                <p className="text-white text-sm">
                  3-day free trial for all new users
                </p>
              </div>

              {/* Cancel anytime */}
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <FaRotateLeft className="text-white text-[14px]" />
                </div>
                <p className="text-white text-sm">
                  Cancel anytime, no questions asked
                </p>
              </div>

              {/* Join happy plant parents */}
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <FaHeart className="text-white text-[14px]" />
                </div>
                <p className="text-white text-sm">
                  Join other happy plant parents
                </p>
              </div>
            </div>
            <div className="rounded-lg w-full p-4 bg-white/20">
              <p className="text-primaryLight text-sm font-medium text-center">
                Trusted by plant lovers worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full text-center mb-8">
          <p className="text-primary/70 text-sm mb-5">
            All plans include access to our thriving plant community
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-primary/70 text-xs">
            <div className="flex items-center gap-2">
              <FaLock className="text-[#22C55E] text-[16px]" />
              <span>Secure payments</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMobileScreen className="text-[#22C55E] text-[16px]" />
              <span>iOS & Android</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRotate className="text-[#22C55E] text-[16px]" />
              <span>Auto-sync across devices</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PremiumFeature = ({ icon, iconBg, title, description }) => {
  return (
    <div className="flex items-center gap-4 bg-[#F5F5E9] px-3 py-3 rounded-lg">
      <div
        className="rounded-full flex items-center justify-center p-2.5"
        style={{ background: iconBg }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-primary font-semibold text-[16px]">{title}</h3>
        <p className="text-primary/70 text-[13px]">{description}</p>
      </div>
    </div>
  );
};

export default PricingPackages;
