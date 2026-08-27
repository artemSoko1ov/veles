import clsx from "clsx";
import styles from "./Footer.module.scss";
import Logo from "@/shared/ui/Logo";
import { navItems } from "@/widgets/Header/model/navItems";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.inner, "container")}>
        <a className={styles.brand} href="/" aria-label="На главную">
          <Logo />
        </a>

        <div className={styles.info}>
          <p className={styles.text}>
            Семейное кафе с теплой кухней, банкетами и спокойной атмосферой.
          </p>

          <div className={styles.contacts}>
            <a href="tel:+79999999999">+7 (999)-999-99-99</a>
            <a href="https://yandex.ru/maps/" target="_blank" rel="noreferrer">
              г. Миасс, ул. Гуськова, 73
            </a>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Навигация в подвале">
          {navItems.map(({ label, href }) => (
            <a className={styles.link} href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <p className={styles.copy}>© {currentYear} «Велес»</p>
      </div>
    </footer>
  );
};

export default Footer;
