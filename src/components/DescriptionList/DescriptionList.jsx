import { description } from "../../data/description";
import styles from './DescriptionList.module.scss';
import {DescriptionListItem} from './DescriptionListItem/DescriptionListItem'

export const DescriptionList = () => {
  return (
    <div className="container">
      <ul className={styles.list}>
        {description.map(({ avatar,title, description, id }) => (
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
