import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./Recipes.module.scss";
import { RecipesList } from "../../components/RecipesList/RecipesList";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Section } from "../../components/Section/Section";
import { recipes } from "../../data/recipes";

export const Recipes = () => {

  const [visibleRecipes, setVisibleRecipes] = useState(6);

  const loadMoreRecipes = () => {
    // Функция для загрузки большего количества карточек
    setVisibleRecipes(visibleRecipes + 3); 
  };
  return (
    <>
      <Header></Header>
      <Section>
        <RecipesList visibleRecipes={visibleRecipes}></RecipesList>
        {visibleRecipes < recipes.length && (
          <NavLink className={styles.btn_all} onClick={loadMoreRecipes}>
            Показати ще
          </NavLink>
        )}
      </Section>

      <Footer></Footer>
    </>
  );
};
