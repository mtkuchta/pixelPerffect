import * as React from "react";
import * as styles from "./sectionOffice.module.scss";
import office from "../../images/office/office.png";
import decorationImg from "../../images/office/decorationImg.png";

const SectionOffice = () => {
  return (
    <section className={styles.sectionOffice}>
      <div
        className={styles.backgroundContainer}
        style={{ backgroundImage: `url(${office})` }}
      ></div>
      <div className={styles.titleContainer}>
        <p className={styles.officeTitle}>Lorem ipsum vs własne biuro</p>
      </div>
      <div
        className={styles.decoration}
        style={{ backgroundImage: `url(${decorationImg})` }}
      ></div>
    </section>
  );
};

export default SectionOffice;
