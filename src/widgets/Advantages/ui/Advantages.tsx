import styles from './Advantages.module.scss';
import Section from "@/shared/ui/Section";
import Card from "@/shared/ui/Card";
import images from "@/shared/assets/images/cards/coffee.png"

const Advantages = () => {
  return (
    <Section
      title="Почему выбирают «Велес»"
      description="От семейного ужина до большого банкета — создаем комфортную атмосферу, готовим домашние блюда и заботимся о каждом госте."
      className={styles.advantages}
    >
      <div className={styles.grid}>
        <Card
          image={images}
          title="Домашняя кухня"
          description="Русские и европейские блюда, которые готовим после заказа из свежих продуктов."
        />

        <Card
          image={images}
          title="Домашняя кухня"
          description="Русские и европейские блюда, которые готовим после заказа из свежих продуктов."
        />

        <Card
          image={images}
          title="Бизнес-ланчи"
          description="Сытный обед по будням с 12:00 до 16:00."
        />

        <Card
          image={images}
          title="Банкеты и мероприятия"
          description="Юбилеи, корпоративы, свадьбы и другие праздники в уютной атмосфере."
        />

        <Card
          image={images}
          title="Уютная атмосфера"
          description="Спокойное место для семейного обеда, встречи или вечера с близкими."
        />

        <Card
          image={images}
          title="Кофе с собой"
          description="Хороший кофе, который можно взять с собой."
        />
      </div>
    </Section>
  );
};

export default Advantages;