import * as React from "react";
import * as styles from "./detailsItem.module.scss";
import PropTypes from "prop-types";

const DetailsItem = ({ img, alt, description }) => {
  return (
    <div className={styles.contentContainer}>
      <img src={img} alt={alt} />
      <p>{description}</p>
    </div>
  );
};

DetailsItem.propTypes = {
  img: PropTypes.object,
  alt: PropTypes.string,
  description: PropTypes.string,
};

export default DetailsItem;
