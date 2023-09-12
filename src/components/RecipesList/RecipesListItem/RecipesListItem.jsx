import styles from "./RecipesListItem.module.scss";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export const RecipesListItem = ({ avatar, name }) => {
  return (
    <li className={styles.item}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="320px"
        height="320px"
      />
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <ul className={styles.list}>
          <li className={styles.social}>
            <Link className={styles.link}>
              <FaYoutube color="black" size={20}/>
            </Link>
          </li>
          <li className={styles.social}>
            <Link className={styles.link}>
              <FaInstagram  color="black" size={20}/>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};
