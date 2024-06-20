import cls from "./Questions.module.sass";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

interface QuestionsProps {
  className?: string;
}

const questionsData = [
  {
    label: "Из чего складывается цена видеопродакшена",
    text: "Ответить на этот вопрос с ходу невозможно. Производство видеоролика - это сложная и комплексная услуга по созданию продукта 'на заказ'. На проекте трудится большое количество разных специалистов. Состав команды может сильно меняться в зависимости от задачи. На конечную стоимость влияет огромное количество факторов (тип видеоролика, продолжительность, география съёмок, наличие графики и т.д)",
  },
  {
    label: "Из чего складывается цена видеопродакшена",
    text: "Каждый проект индивидуален по скорости производства и это зависит от двух основных факторов: сложность съемки и монтажа и скорость обратной связи от заказчика. Мы согласовываем проект на определенных этапах видеопродакшна и важно, чтобы вы оставались на связи. В среднем услуга видеопродакшн полного цикла занимает от 1 недели.",
  },
  {
    label: "Сколько раз можно вносить правки и сколько это будет стоить?",
    text: "После завершения всех этапов видеопродакшн полного цикла, мы отдаем ролик на согласование заказчику. Он может внести свои замечания, после чего мы снова монтируем видео с учетом этих правок. Цикл правок можно повторить 2 раза. Если заказчик продолжает вносить правки, то каждый новый цикл исправлений производится за отдельную оплату.",
  },
];

const accordionItems = questionsData.map((elem, i)=> {
    return {key: i, label: elem.label, children: <p>{elem.text}</p>} 
})
// const items: CollapseProps["items"] = [
//   {
//     key: "1",
//     label: "This is panel header 1",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "2",
//     label: "This is panel header 2",
//     children: <p>{text}</p>,
//   },
//   {
//     key: "3",
//     label: "This is panel header 3",
//     children: <p>{text}</p>,
//   },
// ];

export const Questions = ({ className }: QuestionsProps) => {
  return (
    <>
      <div className={cls.questions_beforeCenter_bgc}></div>
      <div className={cls.questions_afterCenter_bgc}></div>
      <div className={cls.questions}>
        <div className={cls.questions_title}>остались вопросы?</div>
        <div className={cls.questions_body}>
          <Collapse accordion items={accordionItems} />
        </div>
      </div>
    </>
  );
};
