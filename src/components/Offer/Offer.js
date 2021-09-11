import * as React from "react";
import { useState } from "react";
import * as styles from "./offer.module.scss";
import Arrow from "../Arrow/Arrow";
import PropTypes from "prop-types";

const Offer = ({ imgUrl, alt, title, price }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    if (!isHover) setIsHover(true);
  };

  const handleMouseLeave = () => {
    if (isHover) setIsHover(false);
  };
  return (
    <div
      className={styles.offer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        <img src={imgUrl} alt={alt} />
        <Arrow
          direction="right"
          style={{
            position: "absolute",
            bottom: "0",
            right: "-1px",
            zIndex: `10`,
          }}
          isHover={isHover}
          square
        />
        <div className={styles.description}>
          <div className={styles.content}>
            <h3>{title}</h3>
            <div className={styles.separator}></div>
            <p>{`od ${price}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Arrow.propTypes = {
  imgUrl: PropTypes.object,
  alt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};

export default Offer;
