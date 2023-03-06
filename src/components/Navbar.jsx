import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="w-full py-3 flex flex-row justify-between  align-middle navbar ">
        <div className=" flex justify-start">
          <img src={logo} alt="brand logo" className="h-8 w-full" />
        </div>
        <ul className=" sm:flex hidden flex-row  text-white items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={` text-lg hover:border-b-2 
              ${active == nav.title ? "text-white" : "text-dimWhite"}
              ${index == navLinks.length - 1 ? "mr - 0 " : "mr-10"}
              
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className=" sm:hidden  flex p-1 rounded-md align-middle content-center justify-center">
          <img
            src={toggle ? close : menu}
            alt="menu__btn"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
