import cls from "./App.module.sass";
import Header from "../sections/Header/Header";
import { RequestForm } from "../entities/RequestForm/RequestForm";
import SectionInfo from "../sections/Infoblock/SectionInfo";
import ModalWindow from "../entities/Modal/ModalWindow";
import Showreal from "../sections/Showreal/Showreal";
import YouTubeVideo from "../entities/YouTubeVideo/YouTubeVideo";
import About from "../sections/About/About";
import Portfolio from "../sections/Portfolio/Portfolio";
import { CarouselSection } from "../sections/Carousel/CarouselSection";
import { OrderForm } from "../sections/OrderForm/OrderForm";
import { Services } from "../sections/Services/Services";
import { Packages } from "../sections/Packages/Packages";
import { Team } from "../sections/Team/Team";
import { WorkStages } from "../sections/WorkStages/WorkStages";
import { Reviews } from "../sections/Reviews/Reviews";
import { Questions } from "../sections/Questions/Questions";
import { Achievements } from "../sections/Achievements/Achievements";
import { AntdConfigProvider } from "./AntdConfigProvider/AntdConfigProvider";
import { useModalWindowProps } from "../entities/useModalWindowProps/useModalWindowProps";

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
              <YouTubeVideo
                videoUrl={"https://www.youtube.com/watch?v=4xDzrJKXOOY"}
              />,
              {
                body: { padding: 0 },
              },
              "80rem"
            )
          }
        />
        <About showModal={() => showModal(<RequestForm />)} />
        <Portfolio showModal={showModal} />
        <CarouselSection />
        <OrderForm
          description="Мы — видеопродакшн полного цикла. Создаем видео для YouTube и соцсетей, видео для бизнеса, проморолики, корпоративные видео. Заказать видеоролик можно прямо на сайте. Просто оставьте заявку"
          title="заказать видеоролик"
          positionClassName={cls.orderForm1}
          positionGridBefore={cls.orderForm1_beforeCenter_bgc}
          positionGridAfter={cls.orderForm1_afterCenter_bgc}
        />
        <Services />
        <Packages />
        <Team />
        <WorkStages />
        <Reviews />
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
