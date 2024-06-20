import cls from "./Header.module.sass";
import Burger from "./components/Burger/Burger";
import Logo from "../../assets/logo.png";
import Fader from "../../entities/Fader/Fader";
import Button from "../../entities/Button/Button";

interface Header {
  showModal: () => void;
}

function Header({ showModal }: Header) {
  return (
    <header className={cls.header}>
      <img src={Logo} className={cls.logo}></img>
      <Burger></Burger>
      <div className={cls.header_box}>
        <h2 className={cls.title_second}>
          креативная команда - профессиональные видеографы - видеосъемка по
          россии и миру
        </h2>
        <Fader
          arrayOfTitles={[
            {
              title: "мы создаем уникальный видеоконтент",
              markedWord: "уникальный",
            },
            { title: "видеосъемка для вашего бизнеса", markedWord: "бизнеса" },
            { title: "видеопродакшен полного цикла", markedWord: "полного" },
          ]}
          className={cls.header_fader}
          markedWordClassName={cls.header_marked}
        ></Fader>
        <div className={cls.header_description}>
          <h2 className={cls.title_second}>снимаем видеоролики под ключ:</h2>
          <h2 className={cls.title_second}>
            рекламные ролики, концерты, мероприятия
          </h2>
          <h2 className={cls.title_second}>
            в красноярске, красноярском крае и по россии в целом
          </h2>
          <Button
            onClick={showModal}
            buttonStyle="rectangle"
            buttonColor="mainColor"
            textContent="оставить заявку"
            className={cls.header_button_request}
          ></Button>
          <Button
            buttonStyle="rectangle"
            buttonColor="additionalColor"
            textContent="задать вопрос в telegram"
            className={cls.header_button_tg}
          ></Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
