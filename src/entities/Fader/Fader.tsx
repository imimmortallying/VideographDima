import { useEffect, useState } from "react";
import cls from "./Fader.module.sass";

interface FaderProps {
  arrayOfTitles: { title: string; markedWord: string }[];
  markedWordClassName: string;
  className?: string;
}
function Fader({ arrayOfTitles, className, markedWordClassName }: FaderProps) {
  const [faderTextIndex, setFaderTextIndex] = useState(0);
  const [faderText, setFaderText] = useState(arrayOfTitles[0].title);
  const [fade, setFade] = useState(false);

  const faderHandler = () => {
    setFaderTextIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % arrayOfTitles.length;
      setFaderText(arrayOfTitles[newIndex].title);
      return newIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(true); // Начать анимацию исчезновения
      setTimeout(() => {
        faderHandler();
        setFade(false); // Начать анимацию появления
      }, 500);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [faderTextIndex]);

  return (
    <h2
      className={`${cls.fader} ${className} ${fade ? cls.fadeOut : cls.fadeIn}`}
      key={faderTextIndex}
    >
      {faderText
        .split(" ")
        .map((word, i) =>
          word == arrayOfTitles[faderTextIndex].markedWord ? (
            <span key={i} className={`${cls.text_marked} ${markedWordClassName}`}>{word}</span>
          ) : (
            <span key={i} className={cls.text}>{word}</span>
          )
        )}
    </h2>
  );
}

export default Fader;
