import cls from "./Review.module.sass";

interface ReviewProps {
  className?: string;
  imgSrc: string;
  bubbleText: string;
  title: string;
  titleHighlighted: string;
}

export const Review = ({
  imgSrc,
  bubbleText,
  title,
  titleHighlighted,
}: ReviewProps) => {
  return (
    <div className={cls.review}>
      <div className={cls.review_bubble}>{bubbleText}</div>
      <div className={cls.review_personContainer}>
        <img className={cls.review_image} src={imgSrc}></img>
        <div className={cls.review_title}>
          {title}
          <span className={cls.review_highlighted}>{titleHighlighted}</span>
        </div>
      </div>
    </div>
  );
};
