import * as React from "react";
import Offer from "../Offer/Offer";
import * as styles from "./sectionOffers.module.scss";

const SectionOffers = () => {
  return (
    <section className={styles.offers}>
      <Offer />
    </section>
  );
};

export default SectionOffers;
