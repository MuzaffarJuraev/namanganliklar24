import { main_news } from "./helper";

export default () => {
  return (
    <div className=" w-[383px] py-5 px-[17px] bg-[#F6F6F6] rounded-[15px]">
      <h3 className="text-2xl font-medium text-black">Главное</h3>
      <div>
        {main_news.map((item) => (
          <div className="pt-5 " key={item?.id}>
            <h3 className="text-[18px] leading-6 font-medium text-black">
             {item?.title}
            </h3>
            <p className="text-[13px] leading-[15px] font-normal text-[#5E5F61] mt-2 mb-5">
              {item?.author}
            </p>
            <hr className="w-full h-[1px] bg-[#D2D2D2]" />
          </div>
        ))}
      </div>
    </div>
  );
};
