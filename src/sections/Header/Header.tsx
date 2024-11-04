import cls from "./Header.module.sass";
import Fader from "../../entities/Fader/Fader";
import Button from "../../entities/Button/Button";
// import { TgIcon } from "../../entities/Icons/TgIcon/TgIcon";
import bgVideo from "../../assets/Header/bgvideo.mp4";
import { HeaderAnchor } from "./components/Anchor/HeaderAnchor";

interface Header {
  showModal: () => void;
}

const anchorItems = [
  { title: "Главная", key: "Главная", href: "#header" },
  { title: "О студии", key: "О студии", href: "#about" },
  { title: "Портфолио", key: "портфолио", href: "#portfolio" },
  { title: "Услуги", key: "услуги", href: "#services" },
  { title: "Ответы на вопросы", key: "ответы на вопросы", href: "#questions" },
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
          Профессиональная команда по производству видеоконтента – работаем по
          всей России, базируемся в Красноярске
        </h2>
        <Fader
          arrayOfTitles={[
            {
              title: "индивидуальный подход",
              markedWord: "индивидуальный",
            },
            {
              title: "качественный результат",
              markedWord: "качественный",
            },
          ]}
          className={cls.header_fader}
          markedWordClassName={cls.header_marked}
        ></Fader>
        <div className={cls.header_description}>
          <h2 className={cls.title_second}>Снимаем, продюссируем, пишем сценарии:</h2>
          <h2 className={cls.title_second}>
          Имиджевые видео, корпоративные, информационные и рекламные ролики
          </h2>
          <h2 className={cls.title_second}>
          подкасты, интервью, клипы, съёмка любых мероприятий
          </h2>
          <Button
            onClick={() => showModal()}
            buttonStyle="rectangle"
            buttonColor="mainColor"
            textContent="оставить заявку"
            className={cls.header_button_request}
          ></Button>
          {/* <Button
            buttonStyle="rectangle"
            buttonColor="additionalColor"
            textContent="задать нам вопрос"
            className={cls.header_button_tg}
            icon={<TgIcon />}
          ></Button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
