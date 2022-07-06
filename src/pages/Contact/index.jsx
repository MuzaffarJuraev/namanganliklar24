export default () => {
  return (
    <section className="px-[120px]">
      <div className="pt-[60px]">
        <h2 className="text-black text-2xl font-medium">Напишите нам</h2>
        <div className="pt-5 pb-[100px] grid grid-cols-[696px_494px] gap-[10px]">
          <div>
            <div className="grid grid-cols-[343px_343px] gap-[10px]">
              <input
                type="text"
                className="h-[55px] pl-[18px] rounded-[10px] border-[#00000033] border-[1px] focus:outline-0"
                placeholder="Имя"
              />
              <input
                type="number"
                className="h-[55px] pl-[18px] rounded-[10px] border-[#00000033] border-[1px] focus:outline-0"
                placeholder="Номер телефона"
              />
            </div>
            <input
              type="email"
              className="w-full h-[55px] mt-[10px] mb-[10px] pl-[18px] rounded-[10px] border-[#00000033] border-[1px] focus:outline-0"
              placeholder="Электронная почта"
            />
            <textarea
              className="w-full h-[210px] pt-[18px] pl-[18px] rounded-[10px] border-[#00000033] border-[1px] focus:outline-0"
              placeholder="Текст"
            ></textarea>
            <div className="pt-5 flex flex-row justify-end">
              <button className="py-[17px] px-[30px] text-base text-white font-medium bg-[#7297EF] rounded-[10px]">
                Отправить
              </button>
            </div>
          </div>
          <div className="h-[340px] bg-[#F6F6F6] rounded-[10px] py-10 px-[25px]">
            <h3 className="text-xl font-medium text-black">
              Электронная почта
            </h3>
            <p className="text-base font-normal text-black mt-[7px]">
              info@namanganliklar24.uz
            </p>
            <hr className="mt-5" style={{ color: "#F6F6F6" }} />
            <h3 className="mt-5 text-xl font-medium text-black">
              Номер телефона
            </h3>
            <p className="text-base font-normal text-black mt-[7px]">
              +998 88 522-54-76
            </p>
            <hr className="mt-5" style={{ color: "#F6F6F6" }} />
            <h3 className="mt-5 text-xl font-medium text-black">Адрес</h3>
            <p className="text-base font-normal text-black mt-[7px]">
              Ташкент, площадь Мустакиллик, 6
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
