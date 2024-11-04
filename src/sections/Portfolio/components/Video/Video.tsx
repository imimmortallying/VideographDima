import cls from "./Video.module.sass"

interface IVideoProps {
    url: string
}

export const Video = (props:IVideoProps) => {
    return (
        <div className={cls.video}>
                <iframe className={cls.video} 
                src={props.url} 
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-expect-error
                frameborder="0" 
                allowfullscreen>
                </iframe>
        </div>
    );
};
