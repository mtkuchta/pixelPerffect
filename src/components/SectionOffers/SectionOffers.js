import * as React from "react";
import Offer from "../Offer/Offer";
import * as styles from "./sectionOffers.module.scss";
import { offers } from "../../assets/offers";

const SectionOffers = () => {
  return (
    <section className={styles.offers}>
      <div className={styles.contentContainer}>
        {offers.map((offer, index) => {
          return (
            <Offer
              key={`offer_${index}`}
              imgUrl={offer.img}
              alt={offer.alt}
              title={offer.title}
              price={offer.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionOffers;
