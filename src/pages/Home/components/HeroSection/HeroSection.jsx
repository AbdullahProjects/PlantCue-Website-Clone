import React from "react";
import Images from "../../../../utils/images";
import DownloadApp from "../../../../components/DownloadApp/DownloadApp";

const HeroSection = () => {
  return (
    <div className="hero-section container flex py-10">
      {/* Info */}
      <div className="info col1 w-[40%] flex flex-col items-start justify-start gap-4">
        <div className="feature-highlight px-3 py-2 bg-white shadow-lg rounded-full flex flex-row items-center mb-3">
            <div className="feature-dot w-2 h-2 rounded-full bg-primaryLight mr-2"></div>
            <div className="feature-text text-primary text-[12px] font-semibold">AI-Powered Plant Expert</div>
        </div>
        <div className="text-primary flex flex-col justify-center w-[20%]">
          <h1 className="text-[80px]/25 font-bold">Identify Any Plant</h1>
        </div>
        <div className="w-[100px] h-1.5 rounded-full bg-linear-to-l from-primary to-primaryLight"></div>
        <p className="text-[16px] text-textLight">
          Snap a photo. Learn the name. Get expert care tips.
        </p>
        <div className="flex flex-row items-center gap-4 mt-4">
            <DownloadApp img={Images.appleIcon} platform="Apple Store"/>
            <DownloadApp img={Images.playStoreIcon} platform="Google Play"/>
        </div>
        <div className="flex flex-row gap-3 mt-5 items-center relative">
            <div className="images-group relative h-[35px] w-[75px] ">
                <img src={Images.picture1} alt="" className="w-[35px] h-[35px] absolute top-0 left-0 rounded-full" />
                <img src={Images.picture2} alt="" className="w-[35px] h-[35px] absolute top-0 left-5 rounded-full" />
                <img src={Images.picture3} alt="" className="w-[35px] h-[35px] absolute top-0 left-10 rounded-full" />
            </div>
            <p className="text-[15px] font-bold text-primary">Join fellow plant lovers</p>
        </div>
      </div>

      {/* Image */}
      <div className="col1 w-[60%] relative flex flex-row items-start justify-end group">
        <img
          src={Images.homeSectionImage}
          alt=""
          className="w-[80%] z-50 relative group-hover:scale-105 transition-all duration-500"
        />
        <img
          src={Images.homeSectionImageBg}
          alt=""
          className="absolute top-0 right-[0%] w-[35%] z-0 group-hover:scale-110 group-hover:rotate-60 transition-all duration-700"
        />
      </div>
    </div>
  );
};

export default HeroSection;
