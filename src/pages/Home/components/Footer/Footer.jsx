import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer bg-primary py-12">
      <div className="container flex flex-col gap-10">
        {/* PlantCue Info */}
        <div className="flex flex-row items-center justify-between">
          <div className="text-content flex flex-col">
            <h1 className="text-[18px] font-bold text-white">PlantCue</h1>
            <p className="text-[13px] text-primaryLight">Cue Nature</p>
          </div>
          <div className="web-links">
            <ul className="flex flex-row items-center gap-8 text-primaryLight text-[14px]">
                <li className="link">Privacy</li>
                <li className="link">Terms</li>
                <li className="link">Contact</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-links flex flex-row gap-4 justify-center items-center">
            <SocialLinkContainer icon={<FaInstagram className="text-primary text-[22px]"/>}/>
            <SocialLinkContainer icon={<FaTiktok className="text-primary text-[22px]"/>}/>
        </div>
      </div>
    </div>
  );
};

const SocialLinkContainer = ({icon}) => {
    return (
        <div className="flex items-center justify-center rounded-full p-3 bg-primaryLight hover:cursor-pointer">
            {icon}
        </div>
    );
}

export default Footer;
