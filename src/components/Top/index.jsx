import menu_icon from "../../assets/images/menu_icon.png";

export default () => {
  return (
    <>
      <section className="hidden  xl:block">
        <div className="w-full h-[105px] bg-[#F6F6F6] px-[120px] flex flex-row justify-between">
          <div className="flex flex-row justify-between items-center gap-[41px]">
            <h1 className="text-[24px] leading-7 font-bold text-[#7296EE] px-[6px] py-[9px] bg-white rounded-[7px]">
              NAMANGANLIKLAR 24
            </h1>
            <span className="hidden lg:flex flex-row justify-between gap-[25px]">
              <span className="text-base text-[#555555]">
                <span className="text-[#2959CE] font-bold">$</span> 10137.2
              </span>
              <span className="text-base text-[#555555]">
                <span className="text-[#2959CE] font-bold">P</span> 138.26
              </span>
            </span>
          </div>
          <div className="flex flex-row justify-between items-center gap-[25px]">
            <input
              placeholder="Поиск"
              className="w-[275px] h-[45px] pl-[41px] bg-white rounded-[60px] text-sm text-[#8D8D8D] focus:outline-[#2959CE]"
            />
            <button className="text-sm text-white bg-[#7296EC] px-5 py-[12.5px] border-0 rounded-[10px]">
              Войти
            </button>
          </div>
        </div>
      </section>
      <section className="md:block lg:block xl:hidden ">
        <div className="h-[50px] flex flex-row justify-between items-center px-[5px] bg-[#F6F6F6]">
          <h1 className="text-[24px] leading-7 font-bold text-[#7296EE] px-[6px] py-[5px] bg-white rounded-[7px]">
            NAMANGANLIKLAR 24
          </h1>
          <img
            src={menu_icon}
            className="w-[40px] h-[40px]"
            onClick={() => window.localStorage.setItem("menu_open", "true")}
          />
        </div>
      </section>
    </>
  );
};
