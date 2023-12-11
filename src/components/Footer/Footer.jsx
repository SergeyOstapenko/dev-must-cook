import { Link, NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className="container footer">
      <nav className={styles.footer_nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active_link : styles.link_nav
              }
              to="/"
            >
              Головна
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active_link : styles.link_nav
              }
              to="/recipes"
            >
              Рецепти
            </NavLink>
          </li>
          <li className={styles.item}>
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

      <NavLink className={styles.logo} to="/">
        Must Cook
      </NavLink>

      <form className={styles.footer_form}>
        <p className={styles.footer_text}>Підпишіться на розсилку</p>
        <div className={styles.send_container}>
          <input type="text" placeholder="E-mail" className={styles.input} />
          <button type="submit" className={styles.button_send}>
            Підписатись
          </button>
        </div>
      </form>
    </div>
  );
};
