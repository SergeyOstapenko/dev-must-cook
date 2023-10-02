import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Recipes } from "./pages/Recipes/Recipes";
import { About } from "./pages/About/About";
import { RecipesCard } from "./components/RecipesCard/RecipesCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/recipes" element={<Recipes />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/recipes/:id" element={<RecipesCard />}></Route>
      </Routes>
    </>
  );
}

export default App;
