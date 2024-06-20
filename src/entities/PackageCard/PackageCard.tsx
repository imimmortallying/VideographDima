import { Button } from "antd";
import cls from "./PackageCard.module.sass";

interface PackageCardProps {
  className?: string;
  title: string;
  description: string;
  about: string[];
  price: string;
}

export const PackageCard = ({
  className,
  about,
  description,
  title,
  price,
}: PackageCardProps) => {
  return (
    <div className={cls.card}>
      <div className={cls.card_title}>{title}</div>
      <div className={cls.card_description}>{description}</div>
      <div className={cls.card_price}>{price}</div>
      <div className={cls.card_about}>
        <div className={cls.card_aboutItem}></div>
        {about.map((item, i) => (
          <div key={i} className={cls.card_aboutItem}>{item}</div>
        ))}
      </div>
      <Button type="default" className={cls.card_button}>Рассчитать стоимость</Button>
    </div>
  );
};
