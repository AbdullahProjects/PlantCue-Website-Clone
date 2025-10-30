import React from "react";
import Images from "../../../../utils/images";
import Feature from "../../../../components/Feature/Feature";
import DownloadApp from "../../../../components/DownloadApp/DownloadApp";

const HeroSection = () => {
  return (
    <div className="hero-section container flex flex-col-reverse lg:flex-row py-10 lg:gap-2 gap-10">
      {/* Info */}
      <div className="info col1 w-full lg:w-[45%] flex flex-col items-start justify-start gap-3 lg:gap-4">
        <Feature title={"AI-Powered Plant Expert"} />
        <div className="text-primary flex flex-col justify-center w-[70%] lg:w-[20%] mt-3">
          <h1 className="text-[60px]/20 lg:text-[80px]/25 font-bold">
            Identify Any Plant
          </h1>
        </div>
        <div className="w-[100px] h-1.5 rounded-full bg-linear-to-l from-primary to-primaryLight"></div>
        <p className="text-[14px] lg:text-[16px] text-textLight">
          Snap a photo. Learn the name. Get expert care tips.
        </p>
        <div className="flex flex-col md:flex-row lg:gap-3 items-center gap-2 mt-4">
          <DownloadApp img={Images.appleIcon} platform="Apple Store" />
          <DownloadApp img={Images.playStoreIcon} platform="Google Play" />
        </div>
        <div className="flex flex-row gap-2 mt-5 items-center relative">
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
          <p className="text-[15px] font-bold text-primary">
            Join fellow plant lovers
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="col1 w-[90%] lg:w-[55%] relative flex flex-row items-start justify-end">
        <img
          src={Images.homeSectionImage}
          alt=""
          className="w-[80%] z-50 relative hover:scale-105 transition-all duration-500"
        />
        <img
          src={Images.homeSectionImageBg}
          alt=""
          className="absolute top-0 right-[0%] w-[35%] z-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
