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
      {slides.map((slide) => (
        <Slide key={slide.title} {...slide} />
      ))}
    </div>
  );
};

export default Slider;