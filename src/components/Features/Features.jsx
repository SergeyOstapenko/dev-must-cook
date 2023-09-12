import styled from "./Features.module.scss";
import { FaPencilAlt, FaRoute, FaGlobeEurope } from "react-icons/fa";

export const Features = () => {
  return (
    <div className="container">
      <ul className={styled.features_list}>
        <li className={styled.features_item}>
          <div className={styled.features_icon}><FaPencilAlt color="white" size={40}/></div>
          <p className={styled.features_text}>Щоденне оновлення рецептів</p>
        </li>
        <li className={styled.features_item}>
          <div className={styled.features_icon}><FaRoute color="white" size={40}/></div>
          <p className={styled.features_text}>Безкоштовна доставка в будь яку точку міста</p>
        </li>
        <li className={styled.features_item}>
          <div className={styled.features_icon}><FaGlobeEurope color="white" size={40}/></div>
          <p className={styled.features_text}>Більше 1000 рецептів з усього світу</p>
        </li>
      </ul>
    </div>
  );
};
