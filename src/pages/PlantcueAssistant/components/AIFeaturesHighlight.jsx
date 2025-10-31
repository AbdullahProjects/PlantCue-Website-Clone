import React from "react";
import { FaBrain } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

const AIFeaturesHighlight = () => {
  return (
    <div className="col1 w-full lg:w-[50%]">
      <div className="flex flex-col gap-5 items-center w-full lg:w-[85%]">
        <AssistantFeatureItem
          icon={<FaBrain className="text-white text-[22px]" />}
          heading="Smart AI Response"
          subheading="Powered by advanced plant knowledge"
          description="Get personalized advice based on your plant's specific needs, location, and care history."
        />
        <AssistantFeatureItem
          icon={<FaClock className="text-white text-[22px]" />}
          heading="24/7 Availability"
          subheading="Always here when you need help"
          description="Plant emergencies don't wait for business hours. Get instant expert guidance anytime, anywhere."
        />
        <AssistantFeatureItem
          icon={<AiFillSafetyCertificate className="text-white text-[22px]" />}
          heading="Safety First"
          subheading="Pet & child safety guidance"
          description="Learn which plants are safe around pets and children, plus immediate care for plant-related incidents."
        />
      </div>
    </div>
  );
};

const AssistantFeatureItem = (props) => {
  return (
    <div className="item flex w-full flex-col gap-4 bg-white/15 rounded-2xl border border-white/20 px-7 py-8 lg:py-5 hover:scale-105 transition-transform duration-400">
      <div className="flex flex-row items-center gap-4">
        <div className="box p-3.5 bg-white/35 rounded-xl flex items-center justify-center">
          {props.icon}
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-[16px]">{props.heading}</h1>
          <p className="text-white/80 text-[13px]">{props.subheading}</p>
        </div>
      </div>
      <p className="text-white/80 text-[14px]">{props.description}</p>
    </div>
  );
};

export default AIFeaturesHighlight;
