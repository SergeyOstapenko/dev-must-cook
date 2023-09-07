import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";
import { RecipesList } from "./components/RecipesList/RecipesList";

import recipes from '../src/data/recipes.json';

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
      <Section title='Каталог'>
      <RecipesList recipes={recipes}/>
      </Section>
    </>
  );
}

export default App;
