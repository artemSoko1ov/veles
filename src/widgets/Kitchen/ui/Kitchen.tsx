import styles from './Kitchen.module.scss';
import Section from "@/shared/ui/Section";

const Kitchen = () => {
  return (
    <Section
      title="Домашняя кухня"
      description="Русские и европейские блюда, приготовленные из свежих продуктов
  с заботой о каждом госте."
      className={styles.kitchen}
    >

    </Section>
  );
};

export default Kitchen;