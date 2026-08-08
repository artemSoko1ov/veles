import styles from './Header.module.scss';
import clsx from "clsx";
import {navItems} from "@/widgets/Header/model/navItems";
import Logo from "@/shared/ui/Logo";
import {useState} from "react";
import Button from "@/shared/ui/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

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
        <nav
          className={styles.nav}
          aria-label="Основная навигация"
        >
          <ul className={styles.list}>
            {navItems.map(({id, name, link}) => (
              <li
                className={styles.item}
                key={id}
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

        <Button
          variant="outline"
          onClick={toggleMenu}
        >
          Бургер меню
        </Button>
      </div>
    </header>
  );
};

export default Header;
