import styles from './Slide.module.scss'

type Props = {
  title: string;
  description: string;
  image: string;
};

const Slide = ({title, description, image}: Props) => {
  return (
    <div className={styles.slide}>
      <img
        className={styles.image}
        src={image}
        alt=""
        loading="lazy"
      />
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Slide;