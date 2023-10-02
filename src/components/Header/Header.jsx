import { NavLink} from "react-router-dom";

import styles from "./Header.module.scss";
import { FaPizzaSlice } from "react-icons/fa";


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.header__nav}>
          <NavLink to="/">
            <FaPizzaSlice color="white" size={24} />
          </NavLink>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active_link : styles.link_nav
                }
                to="/"
              >
                Головна
              </NavLink>
            </li>
            <li className={styles.header__nav__list__item}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active_link : styles.link_nav
                }
                to="/recipes"
              >
                Рецепти
              </NavLink>
            </li>
            <li className={styles.header__nav__list__item}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active_link : styles.link_nav
                }
                to="/about"
              >
                Про нас
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
