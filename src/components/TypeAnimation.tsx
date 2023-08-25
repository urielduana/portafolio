import { useState, useEffect } from "react";

interface Props {
  texts: string[];
  delay: number;
  infinite: boolean;
  extraDelayAfterWord?: number;
}

const TypeAnimation = ({
  texts,
  delay,
  infinite,
  extraDelayAfterWord = 500,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const currentWord = texts[currentIndex % texts.length];
    const isCurrentWordTyped = currentText === currentWord;

    if (!isDeleting && !isCurrentWordTyped) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      }, delay);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }, delay / 2);
    } else if (isCurrentWordTyped && extraDelayAfterWord > 0) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, extraDelayAfterWord);
    } else if (infinite) {
      setIsDeleting(true);
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    delay,
    infinite,
    texts,
    currentIndex,
    isDeleting,
    extraDelayAfterWord,
  ]);

  return <span>{currentText}</span>;
};

export default TypeAnimation;
