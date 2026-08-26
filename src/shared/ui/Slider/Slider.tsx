import styles from './Slider.module.scss';
import Slide from '@/shared/ui/Slide';

type SlideData = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  slides: SlideData[];
};

const Slider = ({ slides }: Props) => {
  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {slides.map((slide) => (
          <div className={styles.slide} key={slide.title}>
            <Slide {...slide} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;