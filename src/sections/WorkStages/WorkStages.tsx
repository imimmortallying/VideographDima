import { DescriptionCard } from "../../entities/ServiceCard/DescriptionCard";
import cls from "./WorkStages.module.sass";

interface WorkStagesProps {
  className?: string;
}

const cardsData = [
  {
    description:
      "обсуждаем цели и задачи видеопродакшена, подбираем стратегию продвижения",
    title: "1",
    name: "ОБСУЖДЕНИЕ ПРОЕКТА",
  },
  {
    description:
      "заключаем договор на видеопродакшн, прописываем все условия сотрудничества, получаем предоплату 50%",
    title: "2",
    name: "ЗАКЛЮЧЕНИЕ ДОГОВОРА",
  },
  {
    description:
      "составляем контент план, пишем темы видеороликов, согласовываем с заказчиком, предлагаем форматы роликов, варианты локаций",
    title: "3",
    name: "СЦЕНАРИЙ",
  },
  {
    description:
      "подбираем локацию, обсуждаем сценарий с заказчиком, снимаем видеоматериал на выбранные темы (2 — 5 часов)",
    title: "4",
    name: "СЪЁМКА",
  },
  {
    description:
      "в течение 1 недели монтируем видеоролики с использованием эффектов, анимации",
    title: "5",
    name: "МОНТАЖ",
  },
  {
    description:
      "вносим правки заказчика, после итогового согласования получаем остаток средств по договору",
    title: "6",
    name: "ПРАВКИ И СОГЛАСОВАНИЕ",
  },
];

export const WorkStages = ({ className }: WorkStagesProps) => {
  return (
    <>
      <div className={cls.workStages_beforeCenter_bgc}></div>
      <div className={cls.workStages_afterCenter_bgc}></div>
      <div className={cls.workStages}>
        <div className={cls.workStages_title}>этапы работ</div>
        <div className={cls.workStages_body}>
          {cardsData.map((card, i) => (
            <DescriptionCard
              key={i}
              containerClassName={cls.workStages_cardContainer}
              description={card.description}
              descriptionClassName={cls.workStages_cardDescription}
              name={card.name}
              nameClassName={cls.workStages_cardName}
              title={card.title}
              titleClassName={cls.workStages_cardTitle}
            ></DescriptionCard>
          ))}
        </div>
      </div>
    </>
  );
};
