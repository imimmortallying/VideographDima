import cls from "./App.module.sass";
import { ConfigProvider } from "antd";
import Header from "../sections/Header/Header";
import { RequestForm } from "../entities/RequestForm/RequestForm";
import { ReactNode, useState } from "react";
import { ModalStyles } from "../entities/Modal/types";
import SectionInfo from "../sections/Infoblock/SectionInfo";
import ModalWindow from "../entities/Modal/ModalWindow";
import Showreal from "../sections/Showreal/Showreal";
import YouTubeVideo from "../entities/YouTubeVideo/YouTubeVideo";
import About from "../sections/About/About";
import Portfolio from "../sections/Portfolio/Portfolio";
import { CarouselSection } from "../sections/Carousel/CarouselSection";
import { OrderForm } from "../sections/OrderForm/OrderForm";
import { Services } from "../sections/Services/Services";
// import { Packages } from "../sections/Packages/Packages";
// import { Team } from "../sections/Team/Team";
// import { WorkStages } from "../sections/WorkStages/WorkStages";
// import { Reviews } from "../sections/Reviews/Reviews";
// import { Questions } from "../sections/Questions/Questions";
// import { Achievements } from "../sections/Achievements/Achievements";

function App() {
  // modal window
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<null | ReactNode>(null);
  const [modalStyles, setModalStyles] = useState<ModalStyles>(); // чтобы убрать padding
  const [modalWidth, setModalWidth] = useState<string>(); // чтобы передать разную ширину в пропс. через styles передается некорректно

  const showModal = (
    modalContent: ReactNode,
    modalStyles?: ModalStyles,
    modalWidth?: string
  ) => {
    setIsModalOpen(true);
    setModalContent(modalContent);
    setModalStyles(modalStyles);
    setModalWidth(modalWidth);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000000",
          fontFamily: '"Oswald", Arial, sans-serif',
          // fontSize: 20,
        },
        components: {
          Modal: {
            colorIcon: "#FFFFFF",
            wireframe: true,
          },
          Menu: {
            colorText: "#ffffff",
            itemHoverColor: "#ff6000",
            colorPrimary: "#ff6000",
          },
          Button: {
            // colorPrimary: "$third-color",
            fontFamily: '"Oswald", Arial, sans-serif',
            fontSize: 20,
            // algorithm: true,
            defaultBg: "#ff6000",
            defaultBorderColor: "#ff6000",
            defaultHoverBorderColor: "#ff6000",
            defaultHoverBg: "#ff6000",
            defaultColor: "#ffffff",
            defaultHoverColor: "#ffffff",
          },
          Collapse: {
            // colorText: ""
            colorTextHeading: "#ffffff",
          },
        },
      }}
    >
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
              '80rem'
            )
          }
        />
        <About
          showModal={() =>
            showModal(<RequestForm />)
          }
        />
        <Portfolio showModal={showModal} />
        <CarouselSection/>
        <OrderForm
          description="Мы — видеопродакшн полного цикла. Создаем видео для YouTube и соцсетей, видео для бизнеса, проморолики, корпоративные видео. Заказать видеоролик можно прямо на сайте. Просто оставьте заявку"
          title="заказать видеоролик"
          positionClassName={cls.orderForm1}
          positionGridBefore={cls.orderForm1_beforeCenter_bgc}
          positionGridAfter={cls.orderForm1_afterCenter_bgc}
        />
        <Services/>
        {/* <Packages/> */}
        {/* <Team/> */}
        {/* <WorkStages/> */}
        {/* <Reviews/> */}
        {/* <Questions/> */}
        {/* <Achievements/> */}
        {/* <OrderForm
          description="Мы подробно расскажем обо всех тонкостях производства видео-контента и поможем выбрать наиболее подходящий формат в соответствии с вашим бюджетом."
          title="обсудить проект"
          positionClassName={cls.orderForm2}
          positionGridBefore={cls.orderForm2_beforeCenter_bgc}
          positionGridAfter={cls.orderForm2_afterCenter_bgc}
        /> */}

        <ModalWindow
          handleCancel={handleCancel}
          handleOk={handleOk}
          isModalOpen={isModalOpen}
          children={modalContent}
          styles={modalStyles}
          width={modalWidth}
        ></ModalWindow>
      </div>
    </ConfigProvider>
  );
}

export default App;
