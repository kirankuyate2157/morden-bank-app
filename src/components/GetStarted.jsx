import React from "react";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <>
      <div className="ss:w-[140px] ss:h-[140px]  w-[100px] h-[100px] flex flex-col bg-blue-gradient p-1 rounded-full">
        <div className="bg-black  w-full h-full rounded-full  flex flex-col items-center justify-center">
          <div className=" flex flex-row gap-1 ">
            <h4 className="text-gradient">Get</h4>
            <img src={arrowUp} alt="redirect arrow" />
          </div>
          <h4 className="text-gradient">Started</h4>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
