import { PlayIcon } from "../PlayIcon/PlayIcon";
import cls from "./RealsPreview.module.sass";

interface RealsPreviewProps {
  className?: string;
  bgimageSrc: string;
}

export const RealsPreview = ({ className, bgimageSrc }: RealsPreviewProps) => {
  return (
    <div className={`${cls.preview} ${className}`}>
      <img src={bgimageSrc} className={cls.preview_image}></img>
      <PlayIcon className={cls.preview_icon}></PlayIcon>
    </div>
  );
};
