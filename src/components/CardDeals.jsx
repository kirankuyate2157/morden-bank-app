import React from "react";
import { card } from "../assets";
import styles, { layout } from "../styles";
const CardDeals = () => {
  return (
    <section id="features" className={layout.sectionReverse}>
      <div className={layout.sectionInfo}>
        <h1 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" />
          in few easy steps.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button
          type="button"
          className=" text-md bg-blue-gradient text-black hover:ease-in hover:duration-300 p-3 px-4 my-5 rounded-lg text-poppins text-normal"
        >
          Get Started
        </button>
      </div>
      <div className={`${layout.sectionImgReverse}  pb-4 md:pb-0`}>
        <img
          src={card}
          alt="card deals"
          className=" w-[90%] md:w-full h-full "
        />
      </div>
    </section>
  );
};

export default CardDeals;
