import cls from "./DescriptionCard.module.sass";

interface DescriptionCardProps {
  containerClassName?: string;
  title: string;
  titleClassName?: string;
  name?: string;
  nameClassName?: string;
  description: string;
  descriptionClassName?: string;
  price?: string;
  priceClassName?: string;
}

export const DescriptionCard = ({
  containerClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  price,
  priceClassName,
  name,
  nameClassName
}: DescriptionCardProps) => {
  return (
    <div className={`${cls.card} ${containerClassName}`}>
      <div className={`${cls.card_title} ${titleClassName}`}>{title}</div>
      {name && <div className={`${cls.card_name} ${nameClassName}`}>{name}</div>}
      <div className={`${cls.card_description} ${descriptionClassName}`}>{description}</div>
      {price && <div className={`${cls.card_price} ${priceClassName}`}>{price}</div>}
    </div>
  );
};
