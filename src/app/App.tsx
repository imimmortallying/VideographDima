import cls from "./App.module.sass";
import Header from "../sections/Header/Header";
import { RequestForm } from "../entities/RequestForm/RequestForm";
import SectionInfo from "../sections/Infoblock/SectionInfo";
import ModalWindow from "../entities/Modal/ModalWindow";
import Showreal from "../sections/Showreal/Showreal";
import About from "../sections/About/About";
import Portfolio from "../sections/Portfolio/Portfolio";
import { OrderForm } from "../sections/OrderForm/OrderForm";
import { Services } from "../sections/Services/Services";
import { Team } from "../sections/Team/Team";
// import { Reviews } from "../sections/Reviews/Reviews";
import { Questions } from "../sections/Questions/Questions";
import { Achievements } from "../sections/Achievements/Achievements";
import { AntdConfigProvider } from "./AntdConfigProvider/AntdConfigProvider";
import { useModalWindowProps } from "../entities/useModalWindowProps/useModalWindowProps";
import { Video } from "../sections/Portfolio/components/Video/Video";

function App() {
  const { modalProps, showModal } = useModalWindowProps();
  const {
    handleCancel,
    handleOk,
    isModalOpen,
    modalContent,
    modalStyles,
    modalWidth,
  } = modalProps;

  return (
    <AntdConfigProvider>
      <div className={cls.container}>
        <Header showModal={() => showModal(<RequestForm />)} />
        <SectionInfo />
        <Showreal
            showModal={() =>
              showModal(
                <Video url="https://vk.com/video_ext.php?oid=228245627&id=456241840&hd=2&autoplay=1"/>,
                {
                  body: { padding: 0 },
                },
                "80rem"
              )
            }
        />
        <About showModal={() => showModal(<RequestForm />)} />
        <Portfolio showModal={showModal} />
        <OrderForm
          description="Мы — видеопродакшн полного цикла. Создаем видео для YouTube и соцсетей, видео для бизнеса, проморолики, корпоративные видео. Заказать видеоролик можно прямо на сайте. Просто оставьте заявку"
          title="заказать видеоролик"
          positionClassName={cls.orderForm1}
          positionGridBefore={cls.orderForm1_beforeCenter_bgc}
          positionGridAfter={cls.orderForm1_afterCenter_bgc}
        />
        <Services />
        <Team />
        {/* <Reviews /> */}
        <Questions />
        <Achievements />
        <OrderForm
          description="Мы подробно расскажем обо всех тонкостях производства видео-контента и поможем выбрать наиболее подходящий формат в соответствии с вашим бюджетом."
          title="обсудить проект"
          positionClassName={cls.orderForm2}
          positionGridBefore={cls.orderForm2_beforeCenter_bgc}
          positionGridAfter={cls.orderForm2_afterCenter_bgc}
        />
        <ModalWindow
          handleCancel={handleCancel}
          handleOk={handleOk}
          isModalOpen={isModalOpen}
          children={modalContent}
          styles={modalStyles}
          width={modalWidth}
        ></ModalWindow>
      </div>
    </AntdConfigProvider>
  );
}

export default App;
