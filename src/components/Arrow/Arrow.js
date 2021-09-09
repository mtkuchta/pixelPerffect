import * as React from "react";
import * as styles from "./arrow.module.scss";
import PropTypes from "prop-types";

const Arrow = ({ direction, onClick, isHover, ...rest }) => {
  return (
    <div
      className={`${styles.arrowContainer} ${
        direction === "right" ? styles.right : ""
      } ${isHover ? "isHover" : ""}`}
      id={direction}
      onClick={onClick}
      {...rest}
    >
      <div className={styles.arrow}></div>
    </div>
  );
};

Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func,
};

export default Arrow;
