import React from "react";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import arrow from "../../assets/chevron_right.png";

const HowItWorks = () => {
  return (
    <section className="pt-[120px] max-w-[1920px] mx-auto pr-[150px] pl-[150px] min-h-[474px]">
      <div className="flex flex-col items-center pb-[60px]">
        <p className="text-[56px] font-jakarta font-extrabold text-[#1B2559]">
          How Horizon works?
        </p>
        <p className="text-[26px] font-jakarta font-extralight">
          Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.
        </p>
      </div>

      <div className="flex justify-between gap-[40px]">
        <div className="flex gap-[30px]">
          <div>
            <img className="w-[68px]" src={one} alt="one" />
          </div>
          <div className="flex flex-col">
            <p className="text-[26px] font-jakarta font-bold text-[#1B2559]">
              Create your Account
            </p>
            <p className="text-[20px] font-jakarta font-extralight">
              Condimentum vit pellemsque <br /> habitant morbi at molestie.
            </p>
          </div>
        </div>

        <div>
          <img src={arrow} alt="arrow" />
        </div>

        <div className="flex gap-[30px]">
          <div>
            <img className="w-[68px]" src={two} alt="one" />
          </div>
          <div className="flex flex-col">
            <p className="text-[26px] font-jakarta font-bold text-[#1B2559]">
            Setup your Account
            </p>
            <p className="text-[20px] font-jakarta font-extralight">
              Condimentum vit pellemsque <br /> habitant morbi at molestie.
            </p>
          </div>
        </div>

        <div>
          <img src={arrow} alt="arrow" />
        </div>

        <div className="flex gap-[30px]">
          <div>
            <img className="w-[68px]" src={three} alt="one" />
          </div>
          <div className="flex flex-col">
            <p className="text-[26px] font-jakarta font-bold text-[#1B2559]">
            Start creating with Horizon
            </p>
            <p className="text-[20px] font-jakarta font-extralight">
              Condimentum vit pellemsque <br /> habitant morbi at molestie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
