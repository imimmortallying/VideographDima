import cls from "./DescriptionCard.module.sass";
import { BackSide } from "./components/BackSide/BackSide";
import { FrontSide } from "./components/FrontSide/FrontSide";

interface DescriptionCardProps {
  containerClassName?: string;
  title: string;
  titleClassName: string;
  name?: string;
  nameClassName?: string;
  description: string;
  descriptionClassName?: string;
  price?: string;
  priceClassName?: string;
  advantages?: string[];
  advantagesClassName?: string;
}

export const DescriptionCard = ({
  containerClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  price,
  name,
  nameClassName,
  advantages,
  advantagesClassName,
}: DescriptionCardProps) => {
  return (
    <div className={`${cls.card} ${containerClassName}`}>
      <FrontSide
        description={description}
        name={name}
        price={price}
        title={title}
        descriptionClassName={descriptionClassName}
        nameClassName={nameClassName}
        titleClassName={titleClassName}
        className={cls.card__front}
      />
      <BackSide
        advantages={advantages}
        advantagesClassName={advantagesClassName}
        titleClassName={titleClassName}
        className={cls.card__back}
      />
    </div>
  );
};
