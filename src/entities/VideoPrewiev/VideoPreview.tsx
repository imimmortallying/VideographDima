import cls from "./VideoPreview.module.sass"
import PlayButton from "../../assets/playButton2.png";

interface VideoPreviewProps {
    className?: string;
    imageSrc: string;
    showModal?: ()=>void
}

export const VideoPreview = ({className, imageSrc, showModal}:VideoPreviewProps) => {
    return (
        <div className={`${cls.player} ${cls.grid_height}`} onClick={showModal}>
          <img src={imageSrc} className={`${cls.player_image}`}></img>
          <img src={PlayButton} className={`${cls.player_playbutton} ${cls.animate}`}></img>
        </div>
    );
};