import styled from "./Hero.module.scss";
import { Btn } from "../Btn/Btn";

export const Hero = () => {
  return (
    <div className="container">
      <div className={styled.hero}>
        <h1 className={styled.title}>
          {" "}
          Прості
          <br />
          <span className={styled.span}>рецепти</span> смачних страв
        </h1>
        <Btn></Btn>
      </div>
    </div>
  );
};
