import { Header } from "../../components/Header/Header";
import { Section } from "../../components/Section/Section";
import { Footer } from "../../components/Footer/Footer";
import { AboutMe } from "../../components/AboutMe/AboutMe";

export const About = () => {
  return (
    <>
      <Header></Header>
      <Section>
        <AboutMe/>
      </Section>
      
        <Footer></Footer>
      
    </>
  );
};
