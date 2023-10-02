import { Header } from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Features } from "../../components/Features/Features";
import { RecipesList } from "../../components/RecipesList/RecipesList";
import { DescriptionList } from "../../components/DescriptionList/DescriptionList";
import { Hero } from "../../components/Hero/Hero";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
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
        <RecipesList />
      </Section>
      <Section title="Якість в деталях" right>
        <DescriptionList />
      </Section>
      
        <Footer></Footer>
      
    </>
  );
};
