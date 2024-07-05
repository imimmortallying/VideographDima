import cls from "./Advantages.module.sass";

interface AdvantagesProps {
  advantages: string[];
  className?: string;
}

export const Advantages = ({ advantages, className }: AdvantagesProps) => {
  return (
    <div className={`${cls.advantages} ${className}`}>
      {advantages.map((el, i) => (
        <div className={`${cls.advantage} `}>
          {<span className={cls.number}>{`${i + 1}.`}</span>}
          {el}
        </div>
      ))}
    </div>
  );
};
