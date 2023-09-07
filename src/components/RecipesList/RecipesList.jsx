import { RecipesListItem } from "./RecipesListItem/RecipesListItem";
import styles from "./RecipesList.module.scss";
import { FilterMenu } from "../FilterMenu/FilterMenu";

export const RecipesList = ({ recipes }) => {
  return (
    <div className="container">
      <FilterMenu />
      <h2 className={styles.recipesList_title}>Найпопулярніші рецепти</h2>
      <ul className={styles.recipesList}>
        {recipes.map(({ avatar, name, id }) => (
          <RecipesListItem key={id} avatar={avatar} name={name} />
        ))}
      </ul>
    </div>
  );
};
