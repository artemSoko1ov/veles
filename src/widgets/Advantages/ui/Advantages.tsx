import styles from './Advantages.module.scss';
import Section from "@/shared/ui/Section";
import Card from "@/shared/ui/Card";
import {advantagesCards} from "@/widgets/Advantages/model/advantagesCards.ts";

const Advantages = () => {
  return (
    <Section
      title="Почему выбирают «Велес»"
      description="От семейного ужина до большого банкета — создаем комфортную атмосферу, готовим домашние блюда и заботимся о каждом госте."
      className={styles.advantages}
    >
      <div className={styles.grid}>
        {advantagesCards.map(({title, description, image}) => (
          <Card
            title={title}
            description={description}
            image={image}
            key={title}
          />
        ))}
      </div>
    </Section>
  );
};

export default Advantages;