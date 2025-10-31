import React from "react";
import { FeatureDark } from "../../components/Feature/Feature";
import ChatQuestionsHighlight from "./components/ChatQuestionsHighlight";
import AIFeaturesHighlight from "./components/AIFeaturesHighlight";

const PlantcueAssistant = () => {
  return (
    <div className="plantcue-assistant relative bg-[url('src/assets/images/plant_bg_img.png')] bg-cover bg-top">
      {/* Bg Gradient */}
      <div className="overlay-gradient-container absolute inset-0 bg-linear-to-r from-primary/90 to-primaryLight/80"></div>

      {/* Content */}
      <div className="container relative py-20 z-10 w-full flex flex-col items-center justify-center">
        {/* Feature */}
        <FeatureDark title="AI Plant Expert" />

        {/* Heading & Subheading */}
        <h1 className="text-white text-[30px] lg:text-[40px] font-bold mt-8">
          AskCue - Your Plant Assistant
        </h1>
        <p className="w-[40%] text-white/80 text-[14px] lg:text-[16px] text-center mt-2">
          Chat with your personal plant assistant 24/7. Get instant answers
          about plant care, pests, and safety.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-20 mt-16 lg:mt-20">
          {/* Column 1: Chat Questions Highlighting */}
          <ChatQuestionsHighlight />

          {/* Column 2: AI Features Highlighting */}
          <AIFeaturesHighlight />
        </div>

        {/* Feature */}
        <div className="mt-16">
          <FeatureDark title="All your questions answered" />
        </div>
      </div>
    </div>
  );
};

export default PlantcueAssistant;
