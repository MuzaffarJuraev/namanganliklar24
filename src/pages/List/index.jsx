import { useLocation } from "react-router-dom";

import Banner from "../../components/Banner";
import MainNews from "../../components/MainNews";
import News from '../../components/News'

import banner from "../../assets/images/banner2.png";
import rec_image from '../../assets/images/reclom2.png'
import { sorted_news } from "../../components/News/helper";

export default () => {
  const { state } = useLocation();
  return (
    <div className="pt-10 pb-[100px] px-[120px]">
      <Banner img={banner} />
      <p className="mt-[50px] font-medium text-[24px] leading-[28px] text-black">
        {state}
      </p>
      <div className="grid grid-cols-[797px_383px] gap-[10px] mt-5">
        <div>
          {sorted_news.map((item) => (
            <News key={item.id} item={item} />
          ))}
          <button className="w-full py-[17px] mt-[7px] bg-[#EAEAEA] rounded-[10px] text-base font-medium text-black">
            Показать ещё
          </button>
        </div>
        <div>
          <MainNews />
          <div className="w-full h-[553px] mt-[10px]">
            <img
              src={rec_image}
              className="w-full h-full rounded-[15px]"
              alt="reclome"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
