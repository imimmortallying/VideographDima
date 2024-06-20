import { PackageCard } from "../../entities/PackageCard/PackageCard";
import cls from "./Packages.module.sass";

interface PackagesProps {
  className?: string;
}

const packagesCardsData = [
  {
    titile: "КОНФЕРЕНЦИЯ, ФОРУМ",
    description:
      "НЕПРЕРЫВНАЯ СЪЕМКА БОЛЬШОЙ ДЛИТЕЛЬНОСТИ С ДВУХ И БОЛЕЕ КАМЕР ИНФОГРАФИКА 2D - 3D",
    price: "от 40 000 руб",
    about: [
      "FullHD и 4K качество",
      "Две и более камеры",
      "Трансляция на экраны и в сеть",
      "Слайды и легкая инфографика",
      "Быстрая передача материала",
    ],
  },
  {
    titile: "ПРОМОРОЛИК",
    description:
      "ОБЗОРНЫЙ ВИДЕОМАТЕРИАЛ О ПРОДУКТЕ ИЛИ СОБЫТИИ. ПОДОЙДЕТ ДЛЯ САЙТА И YOUTUBE.",
    price: "от 50 000 руб",
    about: [
      "FullHD и 4K качество",
      "1-3 минуты",
      "Сценарий",
      "2D инфографика",
      "Озвучивание",
    ],
  },
  {
    titile: "ТРАНСЛЯЦИЯ",
    description: "ОНЛАЙН-ТРАНСЛЯЦИЯ ДЕЛОВОГО ИЛИ РАЗВЛЕКАТЕЛЬНОГО МЕРОПРИЯТИЯ",
    price: "от 35 000 руб",
    about: [
      "Аудиооборудование",
      "Захват слайдов",
      "Удаленные спикеры, зум",
      "Графическое оформление",
      "Полиэкран",
    ],
  },
  {
    titile: "ЗАПИСЬ КУРСОВ, УРОКОВ",
    description: "ОНЛАЙН ОБУЧЕНИЕ ПЕРЕХОДИТ НА НОВЫЙ ВИЗУАЛЬНЫЙ УРОВЕНЬ",
    price: "от 30 000 руб",
    about: [
      "Длительность: 8-10 часов",
      "Добавим инфографику и презентации в уроки",
      "Работа оператора и монтажера",
      "Графическое оформление",
      "Все необходимое оборудование",
    ],
  },
];

export const Packages = ({ className }: PackagesProps) => {
  return (
    <>
      <div className={cls.packages_beforeCenter_bgc}></div>
      <div className={cls.packages_afterCenter_bgc}></div>
      <div className={cls.packages}>
        <div className={cls.packages_title}>Пакет</div>
        <div className={cls.packages_body}>
          {packagesCardsData.map((card, i) => (
            <PackageCard
              key={i}
              about={card.about}
              description={card.description}
              title={card.titile}
              price={card.price}
            ></PackageCard>
          ))}
        </div>
      </div>
    </>
  );
};
