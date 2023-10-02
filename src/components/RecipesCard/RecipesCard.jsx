import { useParams } from "react-router-dom";

import { Section } from "../Section/Section";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { recipes } from "../../data/recipes";
import styles from "./RecipesCard.module.scss";

export const RecipesCard = () => {
    const {id} = useParams();
    console.log(id);
    
  const selectedCard = recipes.find((recipe) => recipe.id===id);
  console.log(selectedCard);

    return (
        <>
        
          <Header />
          <Section>
            <div className="container card">
              <img
                className={styles.avatar}
                src={selectedCard.avatar}
                alt="avatar"
                width="650px"
              />
              <div className={styles.descr}>
                <h2 className={styles.title}>{selectedCard.title}</h2>
                <p className={styles.text}>{selectedCard.recipe}</p>
              </div>
            </div>
          </Section>
          <Section>
            <Footer />
          </Section>
        </>
      );

  
};
