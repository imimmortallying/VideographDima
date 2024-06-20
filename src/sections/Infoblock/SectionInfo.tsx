import cls from "./SectionInfo.module.sass";
import Person from "../../assets/chertila.png";

function SectionInfo() {
  return (
    <>
      <div className={cls.section_info_beforeCenter_bgc}></div>
      <div className={cls.section_info_afterCenter_bgc}></div>
      <section className={cls.section_info}>
        <div className={cls.header}>
          <div>видеосъемка</div>
          <div>в москве</div>
        </div>
        <img src={Person} className={cls.person}></img>
        <div className={cls.about_container}>
          <div className={cls.about}>
            <h3>ВИДЕОПРОДАКШН</h3>
            <h3>Для ютуб</h3>
            <p>вечнозеленый контент, который будет приводить новых клиентов</p>
          </div>
          <div className={cls.about}>
            <h3>ВИДЕОПРОДАКШН</h3>
            <h3>Для инстаграм</h3>
            <p>вечнозеленый контент, который будет приводить новых клиентов</p>
          </div>
          <div className={cls.about}>
            <h3>ВИДЕОПРОДАКШН</h3>
            <h3>Для ютуб</h3>
            <p>вечнозеленый контент, который будет приводить новых клиентов</p>
          </div>
          <div className={cls.about}>
            <h3>ВИДЕОПРОДАКШН</h3>
            <h3>Для ютуб</h3>
            <p>вечнозеленый контент, который будет приводить новых клиентов</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionInfo;
