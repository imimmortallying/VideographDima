import cls from "./Portfolio.module.sass";
import { VideoPreview } from "../../entities/VideoPrewiev/VideoPreview";

import Bg1 from "../../assets/background/bg1.png";
import Bg2 from "../../assets/background/bg2.jpg";
import Bg3 from "../../assets/background/bg3.jpg";
import Bg4 from "../../assets/background/bg4.jpg";
import Bg5 from "../../assets/background/bg5.jpg";
import Bg6 from "../../assets/background/bg6.jpg";
import Bg7 from "../../assets/background/bg7.jpg";
import Bg8 from "../../assets/background/bg8.jpg";
import YouTubeVideo from "../../entities/YouTubeVideo/YouTubeVideo";
import { ReactNode } from "react";
import { ModalStyles } from "../../entities/Modal/types";

interface PortfolioProps {
  showModal: (
    modalContent: ReactNode,
    modalStyles?: ModalStyles,
    modalWidth?: string
  ) => void;
}

const videosData = [
  { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg1 },
  { videoUrl: "https://www.youtube.com/watch?v=MLRccsRBXZU", imgSrc: Bg2 },
  { videoUrl: "https://www.youtube.com/watch?v=fZkl9o-kPNk", imgSrc: Bg3 },
  { videoUrl: "https://www.youtube.com/watch?v=jJoPeafUQTc", imgSrc: Bg4 },
  { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg5 },
  { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg6 },
  { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg7 },
  { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg8 },
  { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg1 },
];

function Portfolio({ showModal }: PortfolioProps) {
  return (
    <>
      <div className={cls.portfolio_beforeCenter_bgc}></div>
      <div className={cls.portfolio_afterCenter_bgc}></div>
      <div className={cls.portfolio_header}>портфолио</div>
      <section className={cls.portfolio}>
        {videosData.map((node, i) => (
          <VideoPreview
            key={i}
            imageSrc={node.imgSrc}
            showModal={() =>
              showModal(
                <YouTubeVideo videoUrl={node.videoUrl} />,
                {
                  body: { padding: 0 },
                },
                "80rem"
              )
            }
          ></VideoPreview>
        ))}
      </section>
    </>
  );
}

export default Portfolio;
