import styles from "./FilterMenu.module.scss";
import { FaSortDown } from "react-icons/fa";

export const FilterMenu = () => {
  return (
    <div className={styles.filter_container}>
      <h3 className={styles.filter_title}>Обрати рецепт</h3>
      <ul className={styles.filter_list}>
        <li className={styles.filter_item}>
          <p className={styles.filter_text}>Сніданок...</p>
          <FaSortDown size={16} />
          <ul className={styles.filter_subList}>
            <li className={styles.filter_subItem}>
              <p>Яєшня</p>
            </li>
            <li className={styles.filter_subItem}>
              <p>Круасан</p>
            </li>
            <li className={styles.filter_subItem}>
              <p>Каша</p>
            </li>
          </ul>
        </li>
        <li className={styles.filter_item}>
          <p className={styles.filter_text}>Обід...</p>
          <FaSortDown size={16} />
          <ul className={styles.filter_subList}>
            <li className={styles.filter_subItem}>
              <p>Перші страви</p>
            </li>
            <li className={styles.filter_subItem}>
              <p>Гарнір</p>
            </li>
            <li className={styles.filter_subItem}>
              <p>Салати</p>
            </li>
          </ul>
        </li>
        <li className={styles.filter_item}>
          <p className={styles.filter_text}>Вечеря...</p>
          <FaSortDown size={16} />
        </li>
        <li className={styles.filter_item}>
          <p className={styles.filter_text}>Салати...</p>
          <FaSortDown size={16} />
        </li>
        <li className={styles.filter_item}>
          <p className={styles.filter_text}>Пісні страви...</p>
          <FaSortDown size={16} />
        </li>
      </ul>
    </div>
  );
};
