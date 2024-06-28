import cls from "./Header.module.sass";
import Fader from "../../entities/Fader/Fader";
import Button from "../../entities/Button/Button";
import { TgIcon } from "../../entities/Icons/TgIcon/TgIcon";
import bgVideo from "../../assets/Header/bgvideo.mp4";
import { HeaderAnchor } from "./components/Anchor/HeaderAnchor";

interface Header {
  showModal: () => void;
}

const anchorItems = [
  { title: "Главная", key: "Главная", href: "#header" },
  { title: "О студии", key: "О студии", href: "#about" },
  { title: "услуги", key: "услуги", href: "#services" },
  { title: "портфолио", key: "портфолио", href: "#portfolio" },
];

function Header({ showModal }: Header) {
  return (
    <header className={cls.header} id="header">
      <video className={cls.header_bgVideo} muted loop autoPlay>
        <source src={bgVideo}></source>
      </video>
      
      <HeaderAnchor items={anchorItems}></HeaderAnchor>

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
            {
              title: "мы создаем уникальный видеоконтент",
              markedWord: "уникальный",
            },
            {
              title: "мы создаем уникальный видеоконтент",
              markedWord: "уникальный",
            },
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
            onClick={() => showModal()}
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
            icon={<TgIcon />}
          ></Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
