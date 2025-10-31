import React from "react";
import AppBar from "./components/AppBar/AppBar";
import HeroSection from "./components/HeroSection/HeroSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import PlantcueAssistant from "../PlantcueAssistant/PlantcueAssistant";
import AppFeatures from "../AppFeatures/AppFeatures";
import PricingPackages from "../PricingPackages/PricingPackages";
import Footer from "./components/Footer/Footer";
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
      <AppFeatures />

      {/* Pricing Packages */}
      <PricingPackages />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
