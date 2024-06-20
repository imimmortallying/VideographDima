import { DescriptionCard } from "../../entities/ServiceCard/DescriptionCard";
import cls from "./Services.module.sass";

interface ServicesProps {
  className?: string;
}

const cardsData = [
  {
    description:
      "Раскроем все преимущества вашей компании с помощью контента, повысим доверие к бренду, расскажем о вашем продукте",
    title: "проморолики",
    price: "от 55 000 руб",
  },
  {
    description:
      "Видеосъемка интервью с вами или лучшим сотрудником вашей компании, раскрытие ценности вашего продукта для целевой аудитории",
    title: "интервью, подкасты",
    price: "от 38 000 руб",
  },
  {
    description:
      "Организуем и проведём онлайн-трансляции на ваш сайт, Facebook, YouTube, Zoom, Instagram и тп",
    title: "трансляции",
    price: "от 55 000 руб",
  },
  {
    description:
      "Съемка конференций и семинаров наиболее востребована развивающимся компаниям",
    title: "конференции",
    price: "от 40 000 руб",
  },
  {
    description:
      "Рекламная предметная съемка роликов для маркетплейсов или вашего магазина",
    title: "предметная съемка",
    price: "от 120 000 руб",
  },
  {
    description:
      "Это будет курс, который будут смотреть с удовольствием. Добавим инфографику и презентации в уроки, Поймаем ваш ритм и разрушим все барьеры перед камерой",
    title: "проморолики",
    price: "от 55 000 руб",
  },
];

export const Services = ({ className }: ServicesProps) => {
  return (
    <>
      <div className={cls.services_beforeCenter_bgc}></div>
      <div className={cls.services_afterCenter_bgc}></div>
      <div className={cls.services}>
        <div className={cls.services_title}>услуги</div>
        <div className={cls.services_body}>
          {cardsData.map((card, i) => (
            <DescriptionCard
              key={i}
              containerClassName={cls.services_cardContainer}
              description={card.description}
              descriptionClassName={cls.services_cardDescription}
              price={card.price}
              priceClassName={cls.services_cardPrice}
              title={card.title}
              titleClassName={cls.services_cardTitle}
            ></DescriptionCard>
          ))}
        </div>
      </div>
    </>
  );
};
