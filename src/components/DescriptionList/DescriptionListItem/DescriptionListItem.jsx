import styles from "./DescriptionListItem.module.scss";

export const DescriptionListItem = ({ avatar, title, description }) => {
  return (
    <li className={styles.item}>
      <img className={styles.image} src={avatar} alt="User avatar" width="655px" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{description}</p>
      </div>
    </li>
  );
};
