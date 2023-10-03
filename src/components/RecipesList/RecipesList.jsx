import { useState } from "react";
import { RecipesListItem } from "./RecipesListItem/RecipesListItem";
import styles from "./RecipesList.module.scss";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import { recipes } from "../../data/recipes";

export const RecipesList = ({visibleRecipes}) => {
  const displayedRecipes = recipes.slice(0, visibleRecipes);
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query) => {
    const filteredResults = recipes.filter(({ title }) =>
      title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="container">
      <FilterMenu onSearch={handleSearch} />
      <h2 className={styles.recipesList_title}>Найпопулярніші рецепти</h2>
      <ul className={styles.recipesList}>
        {searchResults.length > 0
          ? searchResults.map(({ avatar, title, href, id }) => (
              <RecipesListItem
                key={id}
                avatar={avatar}
                title={title}
                href={href}
                id={id}
              />
            ))
          : displayedRecipes.map(({ avatar, title, href, id }) => (
              <RecipesListItem
                key={id}
                avatar={avatar}
                title={title}
                href={href}
                id={id}
              />
            ))}
      </ul>
    </div>
  );
};
