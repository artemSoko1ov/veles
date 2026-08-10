import styles from "./Hero.module.scss"
import Button from "@/shared/ui/Button";

const Hero = () => {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className={styles.content}>
          <h1 id="hero-title">Уютное место для ваших событий и вкусных обедов</h1>

          <p>Русская и европейская кухня, банкетный зал до 100 гостей и бизнес-
            ланчи по будням в самом сердце Миасса.</p>

          <div className={styles.actions}>
            <Button variant="primary">Забронировать стол</Button>
            <Button variant="outline">Посмотреть меню</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;