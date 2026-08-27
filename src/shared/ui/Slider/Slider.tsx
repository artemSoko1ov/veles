import { useState } from "react";
import styles from "./Slider.module.scss";
import Slide from "@/shared/ui/Slide";

type SlideData = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  slides: SlideData[];
};

const Slider = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (slides.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const handleNext = () => {
    setCurrentIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <div className={styles.slider}>
      <button
        className={styles.arrow}
        type="button"
        aria-label="Previous slide"
        onClick={handlePrev}
        disabled={slides.length < 2}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className={styles.trackWrapper}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div className={styles.slide} key={slide.title}>
              <Slide {...slide} />
            </div>
          ))}
        </div>
      </div>

      <button
        className={styles.arrow}
        type="button"
        aria-label="Next slide"
        onClick={handleNext}
        disabled={slides.length < 2}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
