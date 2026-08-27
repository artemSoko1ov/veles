import styles from "./Kitchen.module.scss";
import Section from "@/shared/ui/Section";
import Slider from "@/shared/ui/Slider";
import { kitchenSlides } from "@/widgets/Kitchen/model/kitchenSlides.ts";

const Kitchen = () => {
  return (
    <Section
      title="Домашняя кухня"
      description="Русские и европейские блюда, приготовленные из свежих продуктов
  с заботой о каждом госте."
      className={styles.kitchen}
      id="menu"
    >
      <Slider slides={kitchenSlides} />
    </Section>
  );
};

export default Kitchen;
