import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import { Hero } from "./components/Hero/Hero";
import { Features } from "./components/Features/Features";
// import { RecipesList } from "./components/RecipesList/RecipesList";
import { Footer } from "./components/Footer/Footer";
import { DescriptionList } from "./components/DescriptionList/DescriptionList";
import { Home } from "./pages/Home/Home";
import { Recipes } from "./pages/Recipes/Recipes";
import { About } from "./pages/About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/recipes" element={<Recipes />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
