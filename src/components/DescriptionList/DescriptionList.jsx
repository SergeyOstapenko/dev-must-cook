
import { recipes } from "../../data/recipes";
import styles from './DescriptionList.module.scss';
import {DescriptionListItem} from './DescriptionListItem/DescriptionListItem'

export const DescriptionList = () => {
  return (
    <div className="container">
      <ul className={styles.list}>
        {recipes.map(({ avatar,title, description, id }) => (
          <DescriptionListItem
            key={id}
            avatar={avatar}
            description={description}
            title={title}
          />
        ))}
      </ul>
    </div>
  );
};
