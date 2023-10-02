import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RecipesListItem } from "./RecipesListItem/RecipesListItem";
import styles from "./RecipesList.module.scss";
import { FilterMenu } from "../FilterMenu/FilterMenu";
import { recipes } from "../../data/recipes";

export const RecipesList = () => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query) => {
    // Выполните поиск в массиве recipes по запросу query
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
          : recipes.map(({ avatar, title, href, id }) => (
              <RecipesListItem
                key={id}
                avatar={avatar}
                title={title}
                href={href}
                id={id}
              />
            ))}
      </ul>
      <NavLink className={styles.btn_all} to="/recipes">
        Дивитись всі
      </NavLink>
    </div>
  );
};
