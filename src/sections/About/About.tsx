import cls from "./About.module.sass";
import BgcVideo from "../../assets/backstage1.mp4";
import Button from "../../entities/Button/Button";

interface AboutProps {
  showModal?: () => void;
}

function About({ showModal }: AboutProps) {
  return (
    <>
      <div className={cls.about_beforeCenter_bgc}></div>
      <div className={cls.about_afterCenter_bgc}></div>
      <section className={cls.about}>
        <div className={cls.about_title}>о нас</div>
        <div className={cls.about_wrapper}>
          <video className={cls.about_video} autoPlay muted loop>
            <source src={BgcVideo}></source>
          </video>
          <div className={cls.about_description}>
            Мы занимаемся производством качественного видео-контента более 10
            лет. Готовы взять на себя весь процесс под ключ: от разработки
            концепции и написании сценария до монтажа в готовый продукт.
          </div>
        </div>
        <div className={cls.about_footer}>
          <div className={cls.about_title_second}>снимай с нами</div>
          <div className={cls.about_arrowIcon}></div>
          <Button
            buttonColor="thirdColor"
            buttonStyle="rectangleAglow"
            textContent="оставить заявку"
            className={cls.about_button}
            onClick={showModal}
          ></Button>
        </div>
      </section>
    </>
  );
}

export default About;
