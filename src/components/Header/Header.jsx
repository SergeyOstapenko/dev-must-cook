import styles from "./Header.module.scss";
// import { Link, NavLink } from 'react-router-dom';

export const Header = ({ title, children }) => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.header__nav}>
          <a></a>
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__text}>Головна</a>
            </li>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__text}>Каталог</a>
            </li>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__text}>Про нас</a>
            </li>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__text}>Як замовити</a>
            </li>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__text}>Відгуки</a>
            </li>
            <li className={styles.header__nav__list__item}>
              <a className={styles.header__nav__list__item__text}>Контакти</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
