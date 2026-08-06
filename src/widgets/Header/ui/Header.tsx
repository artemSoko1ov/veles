import styles from './Header.module.scss';
import clsx from "clsx";
import {navItems} from "@/widgets/Header/model/navItems";
import Logo from "@/shared/ui/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.inner, 'container')}>
        <a
          className={styles.logo}
          href="#"
          aria-label="На главную"
        >
          <Logo />
        </a>
        <nav aria-label="Основная навигация">
          <ul className={styles.list}>
            {navItems.map(({name, link}) => (
              <li
                className={styles.item}
                key={link}
              >
                <a
                  className={styles.link}
                  href={link}
                >
                  {name}
                </a>

              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.phone}>
          <a href="tel:89999999999">8(9XX)-XXX-XX-XX</a>
        </div>
      </div>
    </header>
  );
};

export default Header;