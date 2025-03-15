import React from "react";
import horizionLogo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className=" pr-[150px] pl-[150px] pt-[23px] pb-[23px] h-[86px]">
      <nav className="flex justify-between items-center">
        <img className="cursor-pointer" src={horizionLogo} alt="logo" />

        <ul>
          <li className="inline-block pr-[48px] cursor-pointer font-jakarta text-[14px]">
            Product
          </li>
          <li className="inline-block pr-[48px] cursor-pointer font-jakarta text-[14px]">
            Features
          </li>
          <li className="inline-block pr-[48px] cursor-pointer font-jakarta text-[14px]">
            Pricing
          </li>
          <li className="inline-block cursor-pointer font-jakarta text-[14px]">
            Company
          </li>
        </ul>

        <div>
          <button className="pr-[20px] cursor-pointer font-jakarta text-[14px]">
            Log in
          </button>
          <button className="text-[14px] font-jakarta cursor-pointer font-bold bg-[#E9E3FF] pt-[8px] pb-[8px] pr-[16px] pl-[16px] rounded-[10px] text-[#4318FF]">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
