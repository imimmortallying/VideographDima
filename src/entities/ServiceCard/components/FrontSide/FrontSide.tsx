import cls from "./FrontSide.module.sass";

interface FrontSideProps {
  className?: string;
  title?: string;
  titleClassName?: string;
  name?: string;
  nameClassName?: string;
  description?: string;
  descriptionClassName?: string;
  price?: string;
  priceClassName?: string;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const FrontSide = ({
  className,
  description,
  descriptionClassName,
  name,
  nameClassName,
  price,
  priceClassName,
  title,
  titleClassName,
  isActive,
  setIsActive
}: FrontSideProps) => {
  // const [isActive, setIsActive] = useState(false);
  return (
    <div onClick={()=>setIsActive(prev=>!prev)} className={`${cls.card__side} ${cls.card__side_front} ${className} ${isActive ? cls.active : ''}`}>
      <div className={`${cls.card_title} ${titleClassName}`}>{title}</div>
      {name && (
        <div className={`${cls.card_name} ${nameClassName}`}>{name}</div>
      )}
      <div className={`${cls.card_description} ${descriptionClassName}`}>
        {description}
      </div>
      {price && (
        <div className={`${cls.card_price} ${priceClassName}`}>{price}</div>
      )}
    </div>
  );
};
