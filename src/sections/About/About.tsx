import cls from "./About.module.sass";
import BgcVideo from "../../assets/backstage1.mp4";
import ArrowIcon1 from "../../assets/arrow1.svg";
import Button from "../../entities/Button/Button";

interface AboutProps {
  showModal: () => void;
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
            Мы производим видеоконтент, который решит ваши задачи: увеличит
            конверсию, расширит клиентскую базу, повысит узнаваемость бренда,
            расскажет о новой услуге или акции
          </div>
          <div className={cls.glitch}></div>
        </div>
        <div className={cls.about_footer}>
          <div className={cls.about_title_second}>снимай с нами</div>
          <img src={ArrowIcon1} className={cls.about_arrowIcon}></img>
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
