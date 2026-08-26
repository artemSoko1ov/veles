import styles from "./Reviews.module.scss";
import Section from "@/shared/ui/Section";

const Reviews = () => {
  return (
    <Section
      title="Что говорят гости"
      description="Нам важно, чтобы каждый гость уходил довольным и возвращался снова."
    >
      <div className={styles.widget}>
        <iframe
          className={styles.iframe}
          src="https://yandex.ru/maps-reviews-widget/1292434383?comments"
          title="Отзывы о кафе «Велес»"
        />
      </div>
    </Section>
  );
};

export default Reviews;