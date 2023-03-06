import React from "react";

import { stats } from "../constants";
import styles from "../styles";
const Stats = () => {
  return (
    <>
      <section className="flex flex-row  flex-wrap gap-5 justify-around py-5 text-white font-poppins my-3">
        {stats.map((data) => (
          <div className="flex flex-1 justify-start items-center leading-6 gap-4">
            <h1 className=" font-bold ss:text-5xl text-2xl">{data.value}</h1>
            <p className="text-gradient ss:text-xl  font-poppins uppercase">
              {data.title}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Stats;
