import { Advantages } from "../Advantages/Advantages";
import cls from "./BackSide.module.sass"

interface BackSideProps {
    className?: string;
    advantages?: string[];
    advantagesClassName?: string
    titleClassName: string;
}

export const BackSide = ({className, advantages, advantagesClassName, titleClassName}:BackSideProps) => {
    return (
        <div className={`${cls.card__side} ${cls.card__side_back} ${className}`}>
        <div className={`${cls.card_title} ${titleClassName}`}>
          преимущества
        </div>
          {advantages && (
        // <div className={`${cls.card_advantages}`}>

            <Advantages
              advantages={advantages}
              className={`${cls.card_advantage} ${advantagesClassName}`}
            />

        // </div>
          )}
      </div>
    );
};