import React from "react";

import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import styles from "../styles.js";
const Hero = () => {
  return (
    <>
      <section className=" mt-5 flex md:flex-row flex-col">
        <div
          className={`flex-1 ${styles.flexStart} flex-col  xl:px-0 sm:px-16 px-6 `}
        >
          <div className="  w-auto bg-discount-gradient flex gap-2 ms:text-lg text-xs items-center rounded-lg p-1 mb-3 pr-4 ">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className=" text-dimWhite">
              <span className="text-white">20% </span>
              DISCOUNT FOR
              <span className="text-white"> 1 MONTH </span>
              ACCOUNT
            </p>
          </div>
          <div className="  w-full  flex items-center justify-between p-0 m-0">
            <div className="ss:text-[72px] text-[40px]">
              <h1 className="text-bold text-white ">The Next </h1>
              <h1 className="text-bold text-gradient ">Generation</h1>
            </div>
            <div className=" xs:flex hidden xs:pr-10">
              <GetStarted />
            </div>
          </div>
          <h1 className=" w-full flex text-bold text-white mt-0 ss:text-[72px] text-[40px] ">
            Payment Method.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 md:mb-4`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
        <div className=" flex justify-center xs:hidden ">
          <GetStarted />
        </div>
      </section>
    </>
  );
};

export default Hero;
