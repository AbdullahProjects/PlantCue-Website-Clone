import React from "react";
import Images from "../../../../utils/images";
import MenuDrawer from "../../../../components/MenuDrawer/MenuDrawer";

const AppBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="container appbar py-4 flex flex-row justify-between items-center w-full">
      {/* Logo */}
      <div className="logo-section flex flex-row items-center gap-5">
        {/* Menu Button */}
        <MenuDrawer />

        <div className="flex flex-row items-center gap-2.5">
            <div className="logo">
          <img src={Images.logo} alt="logo" className="w-10" />
        </div>
        <div className="app-info flex flex-col items-start">
          <h1 className="text-[18px] font-bold text-primary">PlantCue</h1>
          <p className="text-[13px]/3 text-textLight">Cue Nature</p>
        </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="hidden lg:block menu-items">
        <ul className="flex flex-row items-center gap-8 text-[14px] font-medium text-primary">
          <li 
            className="show-cursor hover:text-primary transition-colors" 
            onClick={() => scrollToSection("how-it-works")}
          >
            How It Works
          </li>
          <li 
            className="show-cursor hover:text-primary transition-colors" 
            onClick={() => scrollToSection("features")}
          >
            Features
          </li>
          <li 
            className="show-cursor hover:text-primary transition-colors" 
            onClick={() => scrollToSection("about-us")}
          >
            About Us
          </li>
        </ul>
      </div>

      {/* Try Free Button */}
      <div className="try-button">
        <button className="show-cursor text-white text-[13px] font-medium bg-linear-to-r from-primary to-primaryLight px-5 py-2 rounded-full hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 active:scale-95">
          Try For Free
        </button>
      </div>
    </div>
  );
};

export default AppBar;
