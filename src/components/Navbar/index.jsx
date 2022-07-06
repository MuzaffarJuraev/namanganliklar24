import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { nav_items } from "./helper";

import cancel_icon from "../../assets/images/cancel_icon.png";

export default () => {
  const navigate = useNavigate();

  const navigatePage = (title, path) => {
    navigate(`${path}`, { state: title });
  };

  return (
    <>
      <nav className="xl:block hidden">
        <div className="h-[72px] px-[120px] ">
          <ul className="flex flex-row gap-[35.7px] pt-5 pb-[30px] border-b border-[#D1D1D1]">
            {nav_items.map((item) => (
              <li key={item.id}>
                <button
                  className="text-[18px] text-[#7F7F7F] leading-[21.33px]"
                  onClick={() => navigatePage(item.title, item.path)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={`xl:hidden w-[320px] absolute right-0 top-0 bg-white`}
      >
        <button
          className="mt-5 ml-5"
          onClick={() => {
            
          }}
        >
          <img src={cancel_icon} alt="" />
        </button>
        <ul>
          {nav_items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
