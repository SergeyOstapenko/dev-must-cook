
import { recipes } from "../../data/recipes";
import styles from './DescriptionList.module.scss';
import {DescriptionListItem} from './DescriptionListItem/DescriptionListItem'

export const DescriptionList = () => {
  const limitedDescription = recipes.slice(2,5)
  return (
    <div className="container">
      <ul className={styles.list}>
        {limitedDescription.map(({ avatar,title, description, id }) => (
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
