import cls from "./Reviews.module.sass";
import person1 from "./../../assets/Reviews/review1.jpg";
import person2 from "./../../assets/Reviews/review2.jpg";
import person3 from "./../../assets/Reviews/review3.jpg";
import person4 from "./../../assets/Reviews/review4.jpg";
import { Review } from "../../entities/Review/Review";

interface ReviewsProps {
  className?: string;
}

const reviewsData = [
  {
    src: person1,
    title: "Менеджер по развитию в",
    titleHighlighted: "Командор",
    bubbleText:
      "Еще раз благодарю всю команду за талант слышать 'хотелки' и готовность сделать чуть больше, чем возможно.",
  },
  {
    src: person2,
    title: "Ген.директор",
    titleHighlighted: "Съем Слона",
    bubbleText:
      "Я СМОТРЮ И ЭТО ТАК КРАСИВО и монтаж классный!!! Скажите, это вы мне первую дозу вкололи да? чтобы я не смогла без вас?",
  },
  {
    src: person3,
    title: "Куратор по связям",
    titleHighlighted: "СФУ",
    bubbleText:
      "Ребята, спасибо вам большое, с вашей поддержкой и веселее, и системнее, и результативнее.",
  },
  {
    src: person4,
    title: "Маркетолог",
    titleHighlighted: "Сибнефть",
    bubbleText:
      "Ребята, я хочу вас просто заобнимать! Я ооооочень благодарна за вашу работу! Во-первых, сам процесс съемок был крутым, это как приключение было! Капец сложно как такие съемки организовать с проф оборудованием в магазине, кафешках, на улице, но у вас это получилось!",
  },
];

export const Reviews = ({ className }: ReviewsProps) => {
  return (
    <>
      <div className={cls.reviews_beforeCenter_bgc}></div>
      <div className={cls.reviews_afterCenter_bgc}></div>
      <div className={cls.reviews}>
        <div className={cls.reviews_title}>отзывы</div>
        <div className={cls.reviews_body}>
          {reviewsData.map((review, i) => (
            <Review
              key={i}
              titleHighlighted={review.titleHighlighted}
              bubbleText={review.bubbleText}
              imgSrc={review.src}
              title={review.title}
            ></Review>
          ))}
        </div>
      </div>
    </>
  );
};
