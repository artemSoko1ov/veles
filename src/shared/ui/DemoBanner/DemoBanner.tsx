import styles from './DemoBanner.module.scss';

const DemoBanner = () => {
  return (
    <div className={styles.banner}>
      <span className={styles.text}>
        Демонстрационная версия сайта
      </span>
    </div>
  );
};

export default DemoBanner;