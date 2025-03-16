import React from "react";
import numbers from '../../assets/numbersImage.png'

const Numbers = () => {
  return (
    <section className="pt-[120px] max-w-[1920px]  mx-auto pr-[150px] pl-[150px] h-[744px]">
      <div className="flex justify-center gap-[70px]">
        <div className="grid grid-cols-4 grid-rows-9  w-[615px] h-[604px] gap-[20px]">
          <div className=" row-start-1 row-end-4 col-start-1 col-end-5">
            <p className="text-[#1B2559] font-extrabold text-[35px] font-jakarta">
              Boost your workflow with Horizon
            </p>

            <p className="text-[18px] font-extralight font-jakarta">
              Urna duis convallis convallis tellus interdum velit laoreet
              pentesque aliquam tortor consequat porta.
            </p>
          </div>
          <div className=" row-start-4 row-end-7 col-start-1 col-end-3">
            <p className="text-[48px] font-jakarta text-[#1B2559] font-extrabold">
              340+
            </p>
            <p className="text-[16px] font-jakarta text-[#1B2559] font-medium">
              Successful Projects
            </p>
            <p className="text-[16px] font-jakarta font-extralight">
              Urna duis convallis convallis tellus interdum velit laoreet.
            </p>
          </div>
          <div className=" row-start-4 row-end-7 col-start-3 col-end-5">
            <p className="text-[48px] font-jakarta text-[#1B2559] font-extrabold">
              $10m
            </p>
            <p className="text-[16px] font-jakarta text-[#1B2559] font-medium">
              Annual Percentage Rate
            </p>
            <p className="text-[16px] font-jakarta font-extralight">
              Urna duis convallis convallis tellus interdum velit laoreet.
            </p>
          </div>
          <div className=" row-start-7 row-end-10 col-start-1 col-end-3">
            <p className="text-[48px] font-jakarta text-[#1B2559] font-extrabold">
              2.8k+
            </p>
            <p className="text-[16px] font-jakarta text-[#1B2559] font-medium">
              Clients Worldwide
            </p>
            <p className="text-[16px] font-jakarta font-extralight">
              Urna duis convallis convallis tellus interdum velit laoreet.
            </p>
          </div>
          <div className="row-start-7 row-end-10 col-start-3 col-end-5">
            <p className="text-[48px] font-jakarta text-[#1B2559] font-extrabold">
              7000+
            </p>
            <p className="text-[16px] font-jakarta text-[#1B2559] font-medium">
              Daily Visits
            </p>
            <p className="text-[16px] font-jakarta font-extralight">
              Urna duis convallis convallis tellus interdum velit laoreet.
            </p>
          </div>
        </div>

        <div>
            <img className="w-[615px] h-[604px]" src={numbers} alt="numbersImage" />
        </div>
      </div>
    </section>
  );
};

export default Numbers;
