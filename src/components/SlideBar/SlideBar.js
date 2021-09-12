import * as React from "react";
import * as styles from "./slideBar.module.scss";
import PropTypes from "prop-types";

const SlideBar = ({ slide }) => {
  return (
    <div className={styles.sliderBar} key={slide}>
      <p>01</p>
      <div className={styles.bar}></div>
      <p>03</p>
    </div>
  );
};

SlideBar.propTypes = {
  slide: PropTypes.number,
};

export default SlideBar;
