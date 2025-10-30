import React from "react";
import AppBar from "./components/AppBar/AppBar";
import HeroSection from "./components/HeroSection/HeroSection";
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
    </div>
  );
};

export default Home;
