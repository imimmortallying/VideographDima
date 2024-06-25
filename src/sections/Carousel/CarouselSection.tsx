import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cls from "./CarouselSection.module.sass";
import "./Carousel.sass";
import Slider from "react-slick";
import { RealsPreview } from "../../entities/RealsPreview/RealsPreview";

import Bg1 from "../../assets/background/bg1.png";
import Bg2 from "../../assets/background/bg2.jpg";
import Bg3 from "../../assets/background/bg3.jpg";
import Bg4 from "../../assets/background/bg4.jpg";
import Bg5 from "../../assets/background/bg5.jpg";
import Bg6 from "../../assets/background/bg6.jpg";
// import Bg7 from "../../assets/background/bg7.jpg";
// import Bg8 from "../../assets/background/bg8.jpg";

interface CarouselSectionProps {
  className?: string;
}

// настройки центрального элемента и др. смотри в Carousel.sass
var settings = {
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  focusOnSelect: true,
  // initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const videosData = [
  { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg1 },
  { videoUrl: "https://www.youtube.com/watch?v=MLRccsRBXZU", imgSrc: Bg2 },
  { videoUrl: "https://www.youtube.com/watch?v=fZkl9o-kPNk", imgSrc: Bg3 },
  { videoUrl: "https://www.youtube.com/watch?v=jJoPeafUQTc", imgSrc: Bg4 },
  { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg5 },
  { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg6 },
  // { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg7 },
  // { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg8 },
  // { videoUrl: "https://www.youtube.com/watch?v=dBl_3pT0PwU", imgSrc: Bg1 },
];

export const CarouselSection = ({}: CarouselSectionProps) => {
  return (
    <>
      <div className={cls.carouselSection_beforeCenter_bgc}></div>
      <div className={cls.carouselSection_afterCenter_bgc}></div>
      <div className={cls.carouselSection_header}>примеры рилсов</div>
      <div className={cls.carouselSection}>
        <div className={cls.slider_container}>
          <Slider {...settings} className={cls.slider}>
            {videosData.map((node, i) => (
              <RealsPreview
                key={i}
                bgimageSrc={node.imgSrc}
                className={cls.item}
              ></RealsPreview>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
