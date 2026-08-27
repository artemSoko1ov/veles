import styles from './Contacts.module.scss';
import Section from "@/shared/ui/Section";

const Contacts = () => {
  return (
    <Section
      title="Будем рады видеть вас"
      description="Заходите на обед, встречу или семейный вечер в «Велес»."
      className={styles.contacts}
      id="contacts"
    >
      <div className={styles.content}>
        <div className={styles.item}>
          <h3 className={styles.label}>Адрес</h3>
          <p>г. Миасс, ул. Гуськова, 73</p>
        </div>

        <div className={styles.item}>
          <h3 className={styles.label}>Телефон</h3>
          <a href="tel:+79999999999">
            +7 (999)-999-99-99
          </a>
        </div>

        <div className={styles.item}>
          <h3 className={styles.label}>Режим работы</h3>
          <p>Ежедневно, 11:00–23:00</p>
        </div>
      </div>


      <div className={styles.map}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/org/veles/1292434383/?ll=60.122998%2C55.031971&z=13"
            width="560"
            height="400"
            frameBorder="1"
            allowFullScreen
            style={{
              position: 'relative',
            }}
            title="Кафе «Велес» на карте"
          />
        </div>
      </div>
    </Section>
  );
};

export default Contacts;