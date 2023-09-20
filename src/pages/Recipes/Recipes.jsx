import { RecipesList } from "../../components/RecipesList/RecipesList";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Section } from "../../components/Section/Section";

export const Recipes = () => {
  return (
    <>
      <Header></Header>
      <Section>
        <RecipesList></RecipesList>
      </Section>
      <Section>
        <Footer></Footer>
      </Section>
    </>
  );
};
