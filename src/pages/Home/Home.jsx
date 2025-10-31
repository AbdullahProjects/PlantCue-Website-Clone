import React from "react";
import AppBar from "./components/AppBar/AppBar";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import PlantcueAssistant from "../PlantcueAssistant/PlantcueAssistant";
import AppFeatures from "../AppFeatures/AppFeatures";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Appbar */}
      <AppBar />

      {/* Divider */}
      <div className="divider h-px bg-[rgba(0,0,0,0.1)]"></div>

      {/* Hero Section */}
      <HeroSection />
      <div className="divider h-[42px]"></div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Plantcue Assistant */}
      <PlantcueAssistant />

      {/* Features */}
      <AppFeatures/>

      <div className="divider h-[400px]"></div>
    </div>
  );
};

export default Home;
