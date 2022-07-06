export default ({ item }) => {
  return (
    <div className="w-[390px] h-[382px] bg-[#f6f6f6] rounded-[15px] pt-5 px-[17px]">
      <h3 className="text-xl text-black font-medium pr-6">{item?.heading}</h3>
      <p className="text-base text-[#4A4B4C] font-normal mt-[10px] mb-[15px]">
        {item?.paragh}
      </p>
      <img src={item?.image} className="w-full h-[165px] rounded-[18px]" />
      <span className="flex items-center gap-[10px] mt-[15px]">
        <img src={item?.icon} className="w-5 h-5" />
        <span className="text-[12px] text-[#5E5F61] font-normal leading-[14px]">
          {item?.author}
        </span>
      </span>
    </div>
  );
};
