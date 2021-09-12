import * as React from "react";
import { useState, useEffect } from "react";
import * as styles from "./headerSlider.module.scss";
import { sliderImages } from "../../assets/sliderImages";
import Arrow from "../Arrow/Arrow";
import SlideBar from "../SlideBar/SlideBar";

const HeaderSlider = ({ playTime }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (nextSlide = currentSlide + 1) => {
    if (nextSlide >= sliderImages.length) return 0;
    if (nextSlide < 0) return sliderImages.length - 1;
    return nextSlide;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(nextSlide());
    }, playTime);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleChangeSlide = (e) => {
    const arrowId = e.target.id ? e.target.id : e.target.parentNode.id;
    if (arrowId === "left") setCurrentSlide(nextSlide(currentSlide - 1));
    if (arrowId === "right") setCurrentSlide(nextSlide(currentSlide + 1));
  };

  return (
    <div className={styles.slider}>
      {sliderImages.map((img, index) => {
        return (
          <div
            key={index}
            className={styles.slide}
            style={{
              backgroundImage: `url(${img})`,
              marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            }}
          ></div>
        );
      })}

      <div className={styles.arrowContainer}>
        <Arrow direction="left" onClick={handleChangeSlide} />
        <Arrow direction="right" onClick={handleChangeSlide} />
      </div>
      <SlideBar slide={currentSlide} playTime={playTime} />
    </div>
  );
};

export default HeaderSlider;
