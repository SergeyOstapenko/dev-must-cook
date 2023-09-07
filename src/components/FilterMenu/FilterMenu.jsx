import styles from "./FilterMenu.module.scss";

export const FilterMenu = () => {
  return (
    <div className={styles.filter_container}>
      <h3 className={styles.filter_title}>Обрати рецепт</h3>
      <ul className={styles.filter_list}>
        <li className={styles.filter_item}>
          <p>Сніданок</p>
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
        <li>
          <p>Обід</p>
        </li>
        <li>
          <p>Вечеря</p>
        </li>
        <li>
          <p>Салати</p>
        </li>
        <li>
          <p>Пісні страви</p>
        </li>
      </ul>
    </div>
  );
};
