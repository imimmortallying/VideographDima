import cls from "./Burger.module.sass";

interface BurgerProps {
  className?: string
}

function Burger({className}:BurgerProps) {
  return (
    <div className={cls.burger}>
      <ul className={cls.burger_list}>
        <li className={cls.burger_item}>
          <a href="#" className={`${cls.burger_link} ${cls.burger_link_firsIitem}`}>
            Главная
          </a>
        </li>
        <li className={cls.burger_item}>
          <a href="#" className={cls.burger_link}>
            О студии
          </a>
        </li>
        <li className={cls.burger_item}>
          <a href="#" className={cls.burger_link}>
            Услуги
          </a>
        </li>
        <li className={cls.burger_item}>
          <a href="#" className={cls.burger_link}>
            Портфолио
          </a>
        </li>
        <li className={cls.burger_item}>
          <a href="#" className={cls.burger_link}>
            Контакты
          </a>
        </li>
        <li className={cls.burger_item}>
          <a href="#" className={cls.burger_link}>
            +7 (228) 420
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
