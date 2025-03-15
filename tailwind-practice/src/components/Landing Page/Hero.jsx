import React from "react";
import heroImg from "../../assets/heroimage.png";
import horizonIconSm from "../../assets/iconSm.png";
import { MdAddIcCall } from "react-icons/md";

const Hero = () => {
  return (
    <section className="flex justify-between pr-[150px] pl-[150px] h-[640px] items-center">
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center">
          <img src={horizonIconSm} alt="" />
          <p className="pl-[11px] font-jakarta font-bold tracking-[0.2em] text-[14px] text-[#4318FF]">
            {" "}
            TRENDIEST TAILWIND TEMPLATES
          </p>
        </div>

        <p className="text-[60px] leading-[72px] font-jakarta font-extrabold text-[#1B2559]">
          Take your website <br /> to the next level <br /> with Horizon UI
        </p>

        <p className="text-[16px] font-extralight font-jakarta">
          Save hundreds of hours trying to create and develop a <br /> dashboard
          from scratch. The fastest, most responsive & <br /> trendiest
          dashboard is here. Seriously.
        </p>

        <div className="flex">
          <button className="font-jakarta bg-[#4318FF] pt-[16px] pb-[16px] pl-[28px] pr-[28px] rounded-[10px] font-bold text-[#fff]">
            Get started now
          </button>
          <button className="flex items-center pt-[16px] pb-[16px] pl-[28px] pr-[28px] font-jakarta">
            {" "}
            <MdAddIcCall /> <span className=" pl-[10px]">
              Book a free call
            </span>{" "}
          </button>
        </div>
      </div>

      <div>
        <img className="w-[456px] h-[640px] " src={heroImg} alt="heroImg" />
      </div>
    </section>
  );
};

export default Hero;
