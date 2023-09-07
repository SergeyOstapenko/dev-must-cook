import { Link } from 'react-router-dom';

import styles from "./Header.module.scss";
import { FaPizzaSlice } from "react-icons/fa";
// import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.header__nav}>
          <Link><FaPizzaSlice color="white" size={24}/></Link>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <Link className={styles.header__nav__list__item__text}/*className={({ isActive }) => (isActive ? 'active' : '')}*/>Головна</Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link className={styles.header__nav__list__item__text}>Каталог</Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link className={styles.header__nav__list__item__text}>Про нас</Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link className={styles.header__nav__list__item__text}>Як замовити</Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link className={styles.header__nav__list__item__text}>Відгуки</Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link className={styles.header__nav__list__item__text}>Контакти</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
