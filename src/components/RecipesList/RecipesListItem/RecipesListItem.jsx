import styles from "./RecipesListItem.module.scss";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export const RecipesListItem = ({ avatar, title, href, id }) => {
  return (
    <li className={styles.item}>
      <Link to={`/recipes/${id}`}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="320px"
          height="320px"
        />
      </Link>

      <div className={styles.content}>
        <p className={styles.name}>{title}</p>
        <ul className={styles.list}>
          <li className={styles.social}>
            <Link
              className={styles.link}
              to={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube color="red" size={20} />
            </Link>
          </li>
          <li className={styles.social}>
            <Link className={styles.link}>
              <FaInstagram color="#E1306C" size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};
