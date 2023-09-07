import styles from './RecipesListItem.module.scss'

export const RecipesListItem = ({avatar, name}) => {
    return (
        <li className={styles.item}>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
    )
}