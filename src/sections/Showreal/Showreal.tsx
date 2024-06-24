import cls from "./Showreal.module.sass";
import BgcImage from "../../assets/showreal.jpg";
import PlayButton from "../../assets/playbutton.png";

interface ShowrealProps {
  showModal?: () => void;
}

function Showreal({ showModal }: ShowrealProps) {
  return (
    <>
      <div className={cls.showreal_beforeCenter_bgc}></div>
      <div className={cls.showreal_afterCenter_bgc}></div>
      <section className={cls.showreal}>
        <div className={cls.showreal_title}>шоурил наших работ</div>
        <div className={cls.showreal_description}>
          Всего за 1 минуту вы поймете диапазон нашей репортажной деятельности.
          Снимаем всё, везде и много.
        </div>
        <div className={cls.image_wrapper} onClick={showModal}>
          <img
            src={BgcImage}
            className={cls.showreal_image}
            draggable="false"
          ></img>
          <div className={cls.image_wrapper_player}>
            <img
              src={PlayButton}
              className={cls.image_wrapper_playbutton}
              draggable="false"
            ></img>
            <div className={cls.image_wrapper_title}>шоурил 2024</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showreal;
