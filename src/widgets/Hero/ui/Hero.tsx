import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <section
      className={styles.hero}
      id="about"
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            Кафе-бар «Велес»
          </p>
          <h1 className={styles.title} id="hero-title">Уютное место для ваших событий и вкусных обедов</h1>

          <p className={styles.description}>Русская и европейская кухня, банкетный зал до 100 гостей и бизнес-
            ланчи по будням в самом сердце Миасса.</p>

          <div className={styles.actions}>
            <a
              className={styles.link}
              href="#menu"
            >
              Посмотреть меню
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;