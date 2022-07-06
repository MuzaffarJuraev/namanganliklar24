import image from "../../assets/images/article.png";
import rec_image from "../../assets/images/recklom.png";
import icon from "../../assets/images/icon9.png";

import { interst_news } from "../../components/InterestCard/helper";

import MainNews from "../../components/MainNews";
import InterestCard from "../../components/InterestCard";

export default () => {
  return (
    <section className="px-[120px]">
      <div className="grid grid-cols-[797px_383px] gap-[10px] mt-[50px] pb-[50px] border-b-[1px] border-[#D2D2D2]">
        <div>
          <span className="flex items-center gap-[10px]">
            <img src={icon} className="w-[30px] h-[30px]" />
            <span className="text-[14px] text-[#5E5F61] font-normal ">
              FBM.ru 22:23
            </span>
          </span>
          <h1 className="mt-[30px] font-medium text-[26px] leading-[36px] text-black">
            Илон Маск принял участие во Всемирной сетевой конференции в Китае
          </h1>
          <img
            src={image}
            className="w-full h-[300px] rounded-[13px] mt-5 "
            alt="image"
          />
          <p className="mt-6 text-[20px] font-normal text-black leading-7 ">
            Илон Маск (Elon Musk, Руководитель фирмы Tesla и других проектов)
            уже второй раз за полторы недели обратился к китайским правящим
            кругам и гражданам. В видеоролике он уверил их в своей готовности
            инвестировать средства в развитие и расширять бизнес на территории
            этой страны. Особое внимание будет уделяться небезопасности
            обрабатываемых данных.
          </p>
          <p className="mt-6 text-[20px] font-normal text-black leading-7 ">
            Они будут храниться только в самом Китае и поэтому будут доступны
            правительству Поднебесной в любой момент.
          </p>
          <p className="mt-6 text-[20px] font-normal text-black leading-7 ">
            Новые заявления Илон Маск сделал во время видеообращения к аудитории
            мероприятия World Internet Conference, которое прошло в конце недели
            в Поднебесной. Компанию ему составили руководители Cisco Systems
            (Чак Роббинс), Intel (Пэт Гелсингер) и Qualcomm (Кристиано Амон), а
            интересы бизнеса Китайской Народной Республики представляли
            руководители Alibaba и Xiaomi.
          </p>
          <p className="mt-6 text-[20px] font-normal text-black leading-7 ">
            Открывал мероприятие Лю Хэ (Liu He, Вице-премьер Госсовета КНР),
            который привёл слова Си Цзиньпина (Xi Jinping) о стремлении
            Поднебесной работать со всеми державами над созданием прозрачной
            цифровой экономики.
          </p>
          <p className="mt-6 text-[20px] font-normal text-black leading-7 ">
            В ближайшее время Tesla собирается не только сделать шире объёмы
            производства автомобилей на электрической тяге в шанхайском филиале,
            но и разработать силами местной студии недорогую модель
            электрического автомобиля (стоимостью менее 25 000 долларов).
          </p>
          <p className="mt-6 text-[20px] font-normal text-black leading-7 ">
            Уже в настоящий момент собранные в Китайской Народной Республике
            электрокары Tesla Model Y и Model 3 поставляются на экспорт в
            Европу.
          </p>
        </div>
        <div>
          <MainNews />
          <img
            src={rec_image}
            className="w-[393px] h-[338px] rounded-[15px] mt-[10px]"
            alt="reclome"
          />
        </div>
      </div>
      <div className="pt-[60px]">
        <h3 className="text-black text-2xl font-medium mb-5">
          По вашим интересам
        </h3>
        <div className="grid grid-cols-3 pb-[100px]">
          {interst_news.map((item) => (
            <InterestCard key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
