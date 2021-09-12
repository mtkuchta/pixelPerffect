import * as React from "react";
import * as styles from "./layout.module.scss";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
