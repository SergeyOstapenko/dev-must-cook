import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Features } from "../../components/Features/Features";
import { RecipesList } from "../../components/RecipesList/RecipesList";
import { DescriptionList } from "../../components/DescriptionList/DescriptionList";
import { Hero } from "../../components/Hero/Hero";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Home.module.scss"

export const Home = () => {
  const [visibleRecipes] = useState(6);
  return (
    <>
      <Header></Header>
      <Section>
        <Hero></Hero>
      </Section>
      <Section>
        <Features></Features>
      </Section>
      <Section title="Рецепти">
        <RecipesList visibleRecipes={visibleRecipes} />
        <NavLink className={styles.btn_all} to="/recipes">
        Дивитись всі
      </NavLink>
      </Section>
      
      <Section title="Якість в деталях" right>
        <DescriptionList />
      </Section>
      
        <Footer></Footer>
      
    </>
  );
};
