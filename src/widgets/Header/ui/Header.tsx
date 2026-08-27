import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Header.module.scss";
import { navItems } from "@/widgets/Header/model/navItems";
import Logo from "@/shared/ui/Logo";
import Bars from "@/shared/assets/icons/bars.svg?react";
import Button from "@/shared/ui/Button";
import PhoneIcon from "@/shared/assets/icons/phone.svg?react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={clsx(styles.header, {
        [styles.headerScrolled]: isScrolled,
        [styles.headerMenuOpen]: isMenuOpen,
      })}
    >
      <div className={clsx(styles.inner, "container")}>
        <a className={styles.logo} href="/" aria-label="На главную">
          <Logo />
        </a>
        <nav
          id="header-navigation"
          className={clsx(styles.nav, {
            [styles.navOpen]: isMenuOpen,
          })}
          aria-label="Основная навигация"
        >
          <ul className={styles.list}>
            {navItems.map(({ label, href }) => (
              <li className={styles.item} key={href}>
                <a className={styles.link} href={href} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.phone}>
          <a href="tel:+79999999999" className={styles.link}>
            <PhoneIcon />
            +7 (999)-999-99-99
          </a>
        </div>

        <Button
          className={clsx(styles.burgerButton, {
            [styles.burgerButtonOpen]: isMenuOpen,
          })}
          variant="outline"
          onClick={toggleMenu}
          aria-controls="header-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          <Bars className={styles.burgerIcon} aria-hidden="true" focusable="false" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
