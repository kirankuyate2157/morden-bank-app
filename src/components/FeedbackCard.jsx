import React from "react";

import { people01, quotes } from "../assets";
const FeedbackCard = ({ title, name, img, content }) => {
  return (
    <>
      <section className=" flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <img
          src={quotes}
          alt="quat"
          className=" w-[42.6px] h-[27.6px] object-contain"
        />
        <p className=" font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          {content}
        </p>
        <div className="flex flex-row ">
          <img
            src={img}
            alt="usr_profile"
            className="w-[48px] h-[48px] rounded-full "
          />
          <div className=" flex flex-col ml-4 ">
            <h1 className=" font-poppins font-semibold text-[20px] leading-[32px] text-white">
              {name}
            </h1>
            <h2 className=" font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
              {title}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedbackCard;
