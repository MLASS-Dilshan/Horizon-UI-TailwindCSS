import React from "react";
import HorizonIcon from "../../assets/HorizonIcon.png";
import facebook from "../../assets/Facebook.png";
import twitter from "../../assets/Twitter.png";
import gitHub from "../../assets/Github.png";
import instagram from "../../assets/Instagram.png";
import linkedIn from "../../assets/LinkedIn.png";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-[32px] pt-[120px]  max-w-[1920px]  mx-auto pr-[150px] pl-[150px] min-h-[356px]">
      <div className="flex justify-center items-center gap-[10px]">
        <div className="w-[36px] h-[36px]">
          <img src={HorizonIcon} alt="horizonicon" />
        </div>
        <p className="text-[30px] font-extrabold text-[#1B2559] font-jakarta">
          HorizonUI
        </p>
      </div>

      <div className="flex justify-center items-center gap-[60px]">
        <p className="text-[14px] font-medium font-jakarta">About</p>
        <p className="text-[14px] font-medium font-jakarta">Features</p>
        <p className="text-[14px] font-medium font-jakarta">Blog</p>
        <p className="text-[14px] font-medium font-jakarta">Resources</p>
        <p className="text-[14px] font-medium font-jakarta">Partners</p>
        <p className="text-[14px] font-medium font-jakarta">Help</p>
        <p className="text-[14px] font-medium font-jakarta">Terms</p>
      </div>

      <div className="flex justify-center items-center gap-[40px]">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={gitHub} alt="github" />
        <img src={linkedIn} alt="linkedin" />
        <img src={instagram} alt="instagram" />
      </div>

      <div className="flex justify-center items-center">
        <p className="text-[14px] font-extralight font-jakarta">
          © 2023, Horizon UI Library. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
