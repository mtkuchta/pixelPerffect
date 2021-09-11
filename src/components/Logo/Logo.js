import * as React from "react";
import * as styles from "./logo.module.scss";

const Logo = ({ ...rest }) => {
  return (
    <div className={styles.logo} {...rest}>
      LOGO
    </div>
  );
};

export default Logo;
