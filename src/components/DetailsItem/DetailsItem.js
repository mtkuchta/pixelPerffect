import * as React from "react";
import * as styles from "./detailsItem.module.scss";

const DetailsItem = ({ img, alt, description }) => {
  return (
    <div className={styles.contentContainer}>
      <img src={img} alt={alt} />
      <p>{description}</p>
    </div>
  );
};

export default DetailsItem;
