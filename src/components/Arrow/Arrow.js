import * as React from "react";
import * as styles from "./arrow.module.scss";
import PropTypes from "prop-types";

const Arrow = ({ direction, onClick, isHover, square, black, ...rest }) => {
  return (
    <div
      className={`${styles.arrowContainer} ${
        direction === "right" ? styles.right : ""
      } ${isHover ? styles.isHover : ""} ${square ? styles.square : ""} ${
        black ? styles.black : ""
      }`}
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
  isHover: PropTypes.bool,
};

export default Arrow;
