import styles from './Advantages.module.scss';
import Section from "@/shared/ui/Section";

const Advantages = () => {
  return (
    <Section
      title="Почему выбирают «Велес»"
      description="От семейного ужина до большого банкета — создаем комфортную атмосферу, готовим домашние блюда и заботимся о каждом госте."
      className={styles.advantages}
    >
      Advantages
    </Section>
  );
};

export default Advantages;