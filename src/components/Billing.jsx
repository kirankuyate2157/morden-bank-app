import React from "react";
import { google, apple, bill } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => {
  return (
    <>
      <section className={`${layout.section}  `} id="product">
        <div className={`${layout.sectionImg} `}>
          <img
            src={bill}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-10 rounded-full pink__gradient" />
          {/* gradient end */}
        </div>
        <div className={layout.sectionInfo}>
          <h1 className={`${styles.heading2}`}>
            You do the business, <br className="sm:block hidden" />
            we’ll handle the money.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <div className="flex  gap-5 my-5">
            <img src={apple} alt="apple store" />
            <img src={google} alt="apple store" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Billing;
