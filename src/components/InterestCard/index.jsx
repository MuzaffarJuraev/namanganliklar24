export default ({ item }) => {
  return (
    <div className="w-[390px] h-[207px] bg-[#f6f6f6] rounded-[15px] pt-5 px-[17px]">
      <h3 className="text-xl text-black font-medium pr-6">{item?.title}</h3>
      <p className="text-base text-[#4A4B4C] font-normal mt-[10px] mb-[15px]">
        {item?.paragh}
      </p>
      <span className="flex items-center gap-[10px] mt-[15px]">
        <img src={item?.icon} className="w-5 h-5" />
        <span className="text-[12px] text-[#5E5F61] font-normal leading-[14px]">
          {item?.author}
        </span>
      </span>
    </div>
  );
};
