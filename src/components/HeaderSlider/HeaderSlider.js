import * as React from "react";
import { useState, useEffect } from "react";
import * as styles from "./headerSlider.module.scss";
import img_1 from "../../images/slider/slider_pict_1.png";
import img_2 from "../../images/slider/slider_pict_2.png";
import img_3 from "../../images/slider/slider_pict_3.png";
import Arrow from "../Arrow/Arrow";

const HeaderSlider = () => {
  const sliderImages = [img_1, img_2, img_3];
  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    setCurrentImage(sliderImages(0));
  });

  return (
    <div className={styles.slider}>
      <img src={img_1} alt="office_photo" className="" />
      <div className={styles.arrowContainer}>
        <Arrow />
      </div>
    </div>
  );
};

export default HeaderSlider;
