import { first_col, second_col, icons } from "./helper";

export default () => {
  return (
    <footer className="bg-[#7297EF]">
      <div className="px-[221px] py-10">
        <h1 className="text-2xl font-bold text-white">NAMANGANLIKLAR 24</h1>
        <div className="grid grid-cols-[400px_300px_298px] pt-[15px] pb-[30px] border-b-[1px] border-[#CECECE]">
          <p className=" w-[229px] text-xs text-white font-normal not-italic">
            Воспроизводство, копирование, использование информации с сайта
            «NAMANGANLIKLAR24.UZ» возможно только с предварительного письменного
            разрешения редакции.
          </p>
          <ul>
            {first_col.map((item) => (
              <li
                key={item.id}
                className="ttext-[16px] leading-8 text-white font-medium not-italic"
              >
                {item.title}
              </li>
            ))}
          </ul>
          <ul>
            {second_col.map((item) => (
              <li
                key={item.id}
                className="text-[16px] leading-8 text-white font-medium not-italic"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row justify-between mt-5">
          <h5 className="text-[18px] text-white leading-6">
            Наши <br />
            социальные сети
          </h5>
          <span className="flex gap-[25px] items-center">
            {icons.map((item) => (
              <img
                src={item.icon}
                key={item.id}
                className="w-[25px] h-[25px] "
                alt="icon"
              />
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};
