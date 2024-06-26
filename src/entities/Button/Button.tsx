import { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.sass";

type ButtonStyles = "rectangle" | "roundedH6rem" | 'rectangleAglow';
// rectangle - прямоугольная, меняющая цвет при hover
// rounded - закругленная, одного цвета, при hover анимация. H6rem - высота, чтобы наложить скругление нужного размера

type ButtonColors = "mainColor" | "additionalColor" | "thirdColor";
// mainColor - основной цвет на сайте
// additionalColor - единично используемый цвет, в данном случае синий под стиль telegram

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  textContent: string;
  buttonStyle: ButtonStyles;
  buttonColor: ButtonColors;
  className: string;
  icon?: ReactNode
  onClick?: () => void;
}

function Button({ textContent, buttonStyle, className, buttonColor, onClick, icon}: ButtonProps) {
  return (
    <div>
      <a onClick={onClick} className={`${cls.button} ${className} ${cls[buttonStyle]} ${cls[buttonColor]}`}>
        {icon ? <div className={cls.icon}>{icon}</div> : ''}{textContent}
      </a>
    </div>
  );
}

export default Button;
