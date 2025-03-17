import React, { useState } from "react";
import horizionLogo from "../../assets/logo.png";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <header className="fixed w-full bg-[#fff] mx-auto pr-[150px] pl-[150px] pt-[23px] pb-[23px] h-[86px] z-50">
      <nav className="flex justify-between items-center relative">
        <img className="cursor-pointer" src={horizionLogo} alt="logo" />

        <div className="md:hidden" onClick={toggleMenu}>
          <button>
            {isMenuOpen ? <RiCloseFill size={40} /> : <CgMenuRight size={40} />}
          </button>
        </div>

        <ul className="hidden md:flex">
          <li className="inline-block pr-[48px] cursor-pointer font-jakarta text-[16px]">
            Product
          </li>
          <li className="inline-block pr-[48px] cursor-pointer font-jakarta text-[16px]">
            Features
          </li>
          <li className="inline-block pr-[48px] cursor-pointer font-jakarta text-[16px]">
            Pricing
          </li>
          <li className="inline-block cursor-pointer font-jakarta text-[16px]">
            Company
          </li>
        </ul>

        <div className="hidden md:flex">
          <button className="pr-[20px] cursor-pointer font-jakarta text-[16px]">
            Log in
          </button>
          <button className="text-[16px] font-jakarta cursor-pointer font-bold bg-[#E9E3FF] pt-[8px] pb-[8px] pr-[16px] pl-[16px] rounded-[10px] text-[#4318FF]">
            Sign up
          </button>
        </div>

        {/* Mobile view */}

        <div
          className={`absolute top-15 left-0 right-0 bg-white/30 backdrop-blur-md pb-[30px] w-full rounded-b-[50px] duration-400 ease-in-out z-[-10] ${
            isMenuOpen ? "top-15" : "top-[-450px]"
          }`}
        >
          <div className="md:hidden pt-[20px]">
            <ul className="flex flex-col items-center justify-center gap-[20px]">
              <li className=" cursor-pointer font-jakarta text-[16px]">
                Product
              </li>
              <li className="  cursor-pointer font-jakarta text-[16px]">
                Features
              </li>
              <li className="  cursor-pointer font-jakarta text-[16px]">
                Pricing
              </li>
              <li className=" cursor-pointer font-jakarta text-[16px]">
                Company
              </li>
            </ul>
          </div>

          <div className="md:hidden flex flex-col items-center gap-[20px]">
            <button className=" cursor-pointer font-jakarta text-[16px] pt-[20px]">
              Log in
            </button>
            <button className="text-[16px] font-jakarta cursor-pointer font-bold bg-[#E9E3FF] pt-[8px] pb-[8px] pr-[16px] pl-[16px] rounded-[10px] text-[#4318FF]">
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
