import cls from "./Header.module.sass";
import Fader from "../../entities/Fader/Fader";
import Button from "../../entities/Button/Button";
import { Drawer, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { TgIcon } from "../../entities/Icons/TgIcon/TgIcon";
import bgVideo from "../../assets/Header/bgvideo.mp4";

interface Header {
  showModal?: () => void;
}
const menuItems = [
  { label: "Главная", key: "Главная" },
  { label: "О студии", key: "О студии" },
  { label: "услуги", key: "услуги" },
  { label: "портфолио", key: "портфолио" },
  { label: "контакты", key: "контакты" },
];
function Header({ showModal }: Header) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={cls.header}>
      <video className={cls.header_bgVideo} muted loop autoPlay>
        <source src={bgVideo}></source>
      </video>
      <div className={cls.menu_icon}>
        <MenuOutlined
          onClick={() => setOpenMenu(true)}
          style={{ color: "white", fontSize: "4rem" }}
        />
      </div>

      <span className={cls.menu_top}>
        <Menu
          items={menuItems}
          mode="horizontal"
          className={cls.menu}
          // style={{ height: "min-content", position: "absolute", right: 0}}
          style={{ display: 'flex', justifyContent: "flex-end", border: 'none', zIndex: 5}}
        ></Menu>
      </span>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        closable={false}
        style={{ backgroundColor: "#161616" }}
        width={"60%"}
      >
        <Menu
          items={menuItems}
          mode="inline"
          className={cls.menu}
          style={{border: 'none'}}
        ></Menu>
      </Drawer>

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
            // { title: "видеосъемка для вашего бизнеса", markedWord: "бизнеса" },
            // { title: "видеосъемка полного цикла", markedWord: "полного" },
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
            icon={<TgIcon/>}
          ></Button>
        </div>
      </div>
    </header>
  );
}

export default Header;