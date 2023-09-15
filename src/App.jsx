import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";
import { RecipesList } from "./components/RecipesList/RecipesList";
import { Footer } from "./components/Footer/Footer";
import { DescriptionList } from "./components/DescriptionList/DescriptionList";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Section>
        <Hero></Hero>
      </Section>
      <Section>
        <Features></Features>
      </Section>
      <Section title='Рецепти'>
      <RecipesList/>
      </Section>
      <Section title='Якість в деталях'>
        <DescriptionList/>
      </Section>
      <Section>
        <Footer></Footer>
      </Section>
    </>
  );
}

export default App;
