import React from "react";
import { FaCamera } from "react-icons/fa6";
import { BiBrain } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const WorkingSteps = () => {
  return (
    <div className="working-steps flex flex-col lg:flex-row items-start justify-center gap-15 mt-14">
      <SingleStep
        stepCount={1}
        heading={"Snap & Scan"}
        subHeading={
          "Point your camera at any plant and capture a clear photo. Our A works instantly!"
        }
        gradientFrom={"#2563EB"}
        gradientTo={"#60A5FA"}
        icon={<FaCamera className="text-[35px] text-white" />}
      />
      <SingleStep
        stepCount={2}
        heading={"AI Magic"}
        subHeading={
          "Advanced AI identifies your plant with 98% accuracy from 400,000+ species database."
        }
        gradientFrom={"#9333EA"}
        gradientTo={"#C084FC"}
        icon={<BiBrain  className="text-[35px] text-white" />}
      />
      <SingleStep
        stepCount={3}
        heading={"Expert Care"}
        subHeading={
          "Get personalized care guides, watering schedules, and health monitoring tips"
        }
        gradientFrom={"#16A34A"}
        gradientTo={"#4ADE80"}
        icon={<FaHeart  className="text-[35px] text-white" />}
      />
    </div>
  );
};

const SingleStep = (props) => {
  return (
    <div className="individual-working-step w-[90%] lg:w-[24%] relative">
      <div className="step-count absolute -top-2 -right-2.5 text-[18px] bg-white p-4 rounded-full shadow-md shadow-black/10 font-bold z-10 w-[30px] h-[30px] flex items-center justify-center">
        <h1 style={{color: props.gradientFrom}}>{props.stepCount}</h1>
      </div>
      <div className="explanation flex flex-col items-center gap-6 ">
        <div
          className="img-container px-8 py-8 rounded-xl bg-[linear-gradient(to_left,var(--from),var(--to))] shadow-md shadow-primary/35"
          style={{
            "--from": props.gradientFrom,
            "--to": props.gradientTo,
          }}
        >
          {props.icon}
        </div>
        <h1 className="text-[25px]/2 font-bold text-primary mt-2">
          {props.heading}
        </h1>
        <p className="text-[14px]/4 font-normal text-textLight text-center mt-1 w-[70%]">
          {props.subHeading}
        </p>
      </div>
    </div>
  );
};

export default WorkingSteps;
