import cls from "./Portfolio.module.sass";
import { VideoPreview } from "../../entities/VideoPrewiev/VideoPreview";

import Bg1 from "../../assets/background/sibmain.jpg";
import Bg2 from "../../assets/background/polith.jpg";
import Bg3 from "../../assets/background/kom.jpg";
import Bg4 from "../../assets/background/sibelem1.jpg";
import Bg5 from "../../assets/background/sibelem2.jpg";
import Bg6 from "../../assets/background/itssib.jpg";
import Bg7 from "../../assets/background/rizon.jpg";
import Bg8 from "../../assets/background/rezinki.jpg";
import Bg9 from "../../assets/background/aptka.jpg";
import { ReactNode } from "react";
import { ModalStyles } from "../../entities/Modal/types";
import { Video } from "./components/Video/Video";

interface PortfolioProps {
  showModal: (
    modalContent: ReactNode,
    modalStyles?: ModalStyles,
    modalWidth?: string
  ) => void;
}

const videosData = [
  { videoUrl: "https://vk.com/video_ext.php?oid=228245627&id=456241830&hd=2&autoplay=1", imgSrc: Bg1 }, // sibmain /
  { videoUrl: "https://vk.com/video_ext.php?oid=228245627&id=456241831&hd=2&autoplay=1", imgSrc: Bg2 }, //politeh / 
  { videoUrl: "https://vk.com/video_ext.php?oid=228245627&id=456241828&hd=2&autoplay=1", imgSrc: Bg3 }, // komandor/
  { videoUrl: "https://vk.com/video_ext.php?oid=228245627&id=456241826&hd=2&autoplay=1", imgSrc: Bg4 }, //sib elem arct/
  { videoUrl: "https://vk.com/video_ext.php?oid=228245627&id=456241825&hd=2&autoplay=1", imgSrc: Bg5 },//sib elem south sib/
  { videoUrl: "https://vk.com/video_ext.php?oid=228245627&id=456241822&hd=2&autoplay=1", imgSrc: Bg6 }, // its sib/
  { videoUrl: "https://vk.com/video_ext.php?oid=228245627&id=456241824&hd=2&autoplay=1", imgSrc: Bg7 }, //rizon
  { videoUrl: "https://vk.com/video_ext.php?oid=228245627&id=456241817&hd=2&autoplay=1", imgSrc: Bg8 }, // rezinki/
  { videoUrl: "https://vk.com/video_ext.php?oid=228245627&id=456241819&hd=2&autoplay=1", imgSrc: Bg9 }, // sport apteki
];

function Portfolio({ showModal }: PortfolioProps) {
  return (
    <>
      <div className={cls.portfolio_beforeCenter_bgc}></div>
      <div className={cls.portfolio_afterCenter_bgc}></div>
      <div className={cls.portfolio_header} id="portfolio">портфолио</div>
      <section className={cls.portfolio}>
        {videosData.map((node, i) => (
          <VideoPreview
            key={i}
            imageSrc={node.imgSrc}
            showModal={() =>
              showModal(
                <Video url={node.videoUrl}/>,
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
