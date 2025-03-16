import React from "react";
import testiImg from "../../assets/testiImg.png";

const Testimonials = () => {
  return (
    <section className="flex flex-col gap-[74px] pt-[120px]  max-w-[1920px]  mx-auto pr-[150px] pl-[150px] min-h-[719px]">
      <div className="flex flex-col  items-center">
        <p className="text-[36px] font-extrabold font-jakarta text-[#1B2559]">
          Customer Testimonials
        </p>
        <p className="text-[16px] font-extralight font-jakarta text-center">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat <br /> commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
      </div>

      <div className="flex justify-center gap-[30px]">
        <div className="flex flex-col items-center justify-center w-[561px] h-[293px] bg-[#F6F8FD] rounded-[16px]">
          <p className="text-center text-[20px] font-bold font-jakarta text-[#1B2559]">
            “A must needed kit for every single software <br /> arhitect. It
            makes your coding life easier and your <br /> final product will be
            blooming.”
          </p>
          <div className="pt-[30px] pb-[16px]">
            <img
              className="w-[40px] h-[40px]"
              src={testiImg}
              alt="testimonial_img"
            />
          </div>
          <p className="text-[18px] font-extrabold font-jakarta text-[#1B2559]">
            Tiana Schleifer
          </p>
          <p className="text-[14px] font-extralight font-jakarta">
            CEO & Founder
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-[561px] h-[293px] bg-[#F6F8FD] rounded-[16px]">
          <p className="text-center text-[20px] font-bold font-jakarta text-[#1B2559]">
            “A must needed kit for every single software <br /> arhitect. It
            makes your coding life easier and your <br /> final product will be
            blooming.”
          </p>
          <div className="pt-[30px] pb-[16px]">
            <img
              className="w-[40px] h-[40px]"
              src={testiImg}
              alt="testimonial_img"
            />
          </div>
          <p className="text-[18px] font-extrabold font-jakarta text-[#1B2559]">
            Tiana Schleifer
          </p>
          <p className="text-[14px] font-extralight font-jakarta">
            CEO & Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
