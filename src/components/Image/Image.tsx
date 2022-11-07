import React from "react";
import ImageJpg from "../../assets/images/background.jpg";
import style from "./image.module.scss";

export const Image: React.FC = () => (
  <div className={style.imageBlock}>
    <div className={style.imageBlock_Img}>
      <img src={ImageJpg} alt="img" />
    </div>
    <p className={style.imageBlock_Text}>
      Scopri il miglior corso di UX design!
    </p>
  </div>
);
