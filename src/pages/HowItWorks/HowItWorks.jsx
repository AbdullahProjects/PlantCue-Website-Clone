import React from "react";
import Feature from "../../components/Feature/Feature";
import WorkingSteps from "./components/WorkingSteps/WorkingSteps";
import Images from "../../utils/images";
import { FaClock } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <div className="how-works-section bg-secondary relative">
      <div className="container flex flex-col py-20 pb-35 w-full items-center justify-center gap-5 z-10 relative">
        {/* Feature Highlight */}
        <Feature title={"Simple & Powerful"} />

        {/* Heading & Subheading */}
        <h1 className="text-[35px]/12 lg:text-[45px]/12 font-bold text-primary mt-4">How It Works</h1>
        <p className="text-[16px]/0 font-normal text-textLight">
          From curious beginner to plant expert in just three taps
        </p>

        {/* 3 Steps Explained */}
        <WorkingSteps />

        {/* Feature Highligh */}
        <div className="feature-highlight px-8 py-4 mt-5 bg-white rounded-lg flex flex-row gap-3 items-center border border-[rgba(0,0,0,0.1)]">
          <div className="text-[18px] text-[#9333EA]">
            <FaClock />
          </div>
          <div className="feature-text text-primary text-[13px] font-semibold">
            Get Result in Seconds
          </div>
        </div>

        {/* Ready to Become Plant Expert Section */}
        <div className="plant-expert-section mt-12 bg-linear-to-l from-primaryLight to-primary px-10 py-10 rounded-2xl w-full flex flex-col items-center justify-center">
          <h1 className="text-[20px] lg:text-[25px] font-bold text-white text-center">
            Ready to become a plant expert?
          </h1>
          <p className="text-[14px] lg:text-[16px] font-normal text-white/80 mt-2 text-center">
            Join others who've already discovered their green thumb
          </p>
          <div className="flex flex-col lg:flex-row items-center mt-8 gap-8">
            <div className="download-section flex flex-row items-center gap-2 rounded-md bg-white px-7 py-4 hover:cursor-pointer">
              <FaDownload className="text-primary text-[18px]" />
              <p className="text-primary text-[14px] font-bold">
                Download Free Now
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="images-group relative h-[35px] w-[75px] ">
                <img
                  src={Images.picture1}
                  alt=""
                  className="w-[35px] h-[35px] absolute top-0 left-0 rounded-full"
                />
                <img
                  src={Images.picture2}
                  alt=""
                  className="w-[35px] h-[35px] absolute top-0 left-5 rounded-full"
                />
                <img
                  src={Images.picture3}
                  alt=""
                  className="w-[35px] h-[35px] absolute top-0 left-10 rounded-full"
                />
              </div>
              <p className="text-[15px] font-medium text-white">
                Happy plant parents
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-image">
        <img src={Images.howWorksSectionBg1} alt="image" className="w-[40%] lg:w-[14%] absolute top-12 right-10 lg:right-20 z-0" />
      </div>
      <div className="bg-image">
        <img src={Images.howWorksSectionBg1} alt="image" className="w-[40%] lg:w-[14%] absolute bottom-8 left-8 lg:left-20 z-0" />
      </div>
    </div>
  );
};

export default HowItWorks;
