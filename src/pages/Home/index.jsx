import React, { useState } from "react";

import Banner from "../../components/Banner";
import Card from "../../components/Card";

import { cards } from "../../components/Card/helper";
import { world_news } from "../../components/News/helper";

import rec_image from "../../assets/images/recklom.png";
import banner from "../../assets/images/banner.png";
import cancel_icon from "../../assets/images/cancel_icon.png";

import News from "../../components/News";
import MainNews from "../../components/MainNews";

export default () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="pt-10 pb-[100px] px-[120px]">
        <Banner img={banner} />
        <section className="mt-[50px]">
          <div className="grid grid-cols-3 grid-rows-2 gap-2">
            {cards.map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
          </div>
        </section>
        <section className="px-[70px] mt-14">
          <div className="flex flex-row justify-between items-center w-[1050px] h-[100px] rounded-xl px-8 bg-[url('./assets/images/background.png')]">
            <div>
              <h3 className="text-[20px] leading-[26px] font-medium">
                Хотите быть в курсе свежих новостей? <br /> Включите
                уведомления!
              </h3>
            </div>
            <div>
              <button
                className="font-medium text-[20] leading-6 text-white px-[30px] py-[13px] bg-[#F78B3B] rounded-[10px]"
                onClick={() => setOpenModal(true)}
              >
                Включит
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-[60px]">
            <h4 className="text-[24px] leading-7 font-medium text-black">
              В мире
            </h4>
            <div className="grid grid-cols-[797px_383px] gap-[10px] mt-5">
              <div>
                {world_news.map((item) => (
                  <News key={item.id} item={item} />
                ))}
                <button className="w-full py-[17px] mt-[7px] bg-[#EAEAEA] rounded-[10px] text-base font-medium text-black">
                  Показать ещё
                </button>
              </div>
              <div>
                <MainNews />
                <div className="w-full h-[338px] mt-[10px]">
                  <img
                    src={rec_image}
                    className="w-full h-full rounded-[15px]"
                    alt="reclome"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className={`${
          openModal ? "block" : "hidden"
        } w-full h-full fixed bottom-0 left-0`}
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[850px] h-[251px] bg-white rounded-[20px]">
            <div className="flex justify-end">
              <img
                src={cancel_icon}
                className="mr-[25px] mt-[25px]"
                alt=""
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[26px] leading-8 font-medium text-black">
                Хотите быть в курсе свежих новостей?{" "}
              </h1>
              <h2 className="text-[26px] leading-8 font-medium text-black">
                {" "}
                Включите уведомления!
              </h2>
              <button className="text-2xl font-medium text-white py-[15px] px-10 bg-[#F78B3B] rounded-[10px] mt-[25px]">
                Включит
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
