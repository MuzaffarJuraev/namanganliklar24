import { useNavigate } from "react-router-dom";

export default ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[797px] h-[205px] mb-[10px] py-[20px] px-[17px] bg-[#F6F6F6] rounded-[15px] flex gap-[15px] cursor-pointer"
      onClick={() => navigate("/article")}
    >
      <img
        src={item?.image}
        className="w-[210px] h-[165px] rounded-[10px]"
        alt=""
      />
      <div>
        <h3 className="text-xl font-medium text-black">{item?.title}</h3>
        <p className="text-base font-normal text-[#4A4B4C] mt-[10px]">
          {item?.paragh}
        </p>
        <span className="flex items-center gap-[10px] mt-[15px]">
          <img src={item?.icon} className="w-5 h-5" />
          <span className="text-[12px] text-[#5E5F61] font-normal leading-[14px]">
            {item?.author}
          </span>
        </span>
      </div>
    </div>
  );
};
