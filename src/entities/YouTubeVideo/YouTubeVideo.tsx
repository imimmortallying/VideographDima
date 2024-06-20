import ReactPlayer from "react-player";
import cls from "./YouTubeVideo.module.sass";
interface YouTubeVideoProps {
  videoUrl: string;
}

const YouTubeVideo = ({ videoUrl }: YouTubeVideoProps) => {
  return (
    <div className={cls.player_wrapper}>
      <ReactPlayer
        className={cls.react_player}
        url={videoUrl}
        width="100%"
        height="100%"
        controls={true}
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
      />
    </div>
  );
};

export default YouTubeVideo;
