import React from "react";
import styles from "../styles";
import GetStarted from "./GetStarted";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <button
          type="button"
          className="  font-semibold text-md bg-blue-gradient text-black hover:ease-in hover:duration-300 p-3 px-5 my-5 rounded-lg text-poppins text-normal"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
