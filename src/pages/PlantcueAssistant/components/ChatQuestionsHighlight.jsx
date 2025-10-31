import React from "react";
import { FaSeedling } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

const ChatQuestionsHighlight = () => {
  return (
    <div className="col1 w-full lg:w-[50%] flex flex-col justify-center items-end gap-6">
      <div className="w-[70%] bg-linear-to-r from-primary to-primaryLight px-10 py-4 rounded-t-2xl rounded-bl-2xl rounded-br-sm">
        <h1 className="text-white text-[15px] font-normal">
          Why are my monstera leaves turning yellow? 🤔
        </h1>
      </div>
      <div className="w-[77.5%] flex flex-row gap-3 items-start">
        <div className="p-3 bg-linear-to-l from-primary to-primaryLight rounded-full">
          <FaSeedling className="text-white text-[16px]" />
        </div>
        <div className="bg-[#F9FAFB] px-6 py-5 rounded-t-2xl rounded-br-2xl rounded-bl-md flex flex-col gap-6 items-center justify-center">
          <p className="text-primary text-[14px] font-medium">
            Yellow leaves on Monstera usually indicate overwatering! Here's what
            to do:
          </p>
          <div className="questions w-full flex flex-col gap-3">
            <div className="chat-question w-full bg-white rounded-lg px-5 py-2 flex flex-row items-center gap-3">
              <div className="bg-[#3B82F6] flex items-center justify-center rounded-full p-2">
                <FaDroplet className="text-white text-[15px]" />
              </div>
              <p className="text-textLight text-[14px]">
                Check if soil feels soggy
              </p>
            </div>
            <div className="chat-question w-full bg-white rounded-lg px-4 py-2 flex flex-row items-center gap-3">
              <div className="bg-[#EAB308] flex items-center justify-center rounded-full p-2">
                <FaClock className="text-white text-[16px]" />
              </div>
              <p className="text-textLight text-[14px]">
                Reduce watering frequency
              </p>
            </div>
            <div className="chat-question w-full bg-white rounded-lg px-4 py-2 flex flex-row items-center gap-3">
              <div className="bg-[#22C55E] flex items-center justify-center rounded-full p-2">
                <FaFilter className="text-white text-[16px]" />
              </div>
              <p className="text-textLight text-[14px]">
                Ensure proper drainage
              </p>
            </div>
          </div>
          <div className="w-full bg-[#E5E7EB] rounded-lg px-5 py-3 flex flex-row items-center gap-3">
            <FaHeart className="text-[#EC4899] text-[16px]" />
            <p className="font-bold text-[16px] text-primary w-[70%]">
              Your plant will recover beautifully!
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70%] bg-linear-to-r from-primary to-primaryLight px-10 py-4 rounded-t-2xl rounded-br-sm rounded-bl-2xl">
        <h1 className="text-white text-[15px] font-normal">
          Thank you! How often should I water it? 💚
        </h1>
      </div>
    </div>
  );
};

export default ChatQuestionsHighlight;
