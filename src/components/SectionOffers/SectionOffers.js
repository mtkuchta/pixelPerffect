import * as React from "react";
import Offer from "../Offer/Offer";
import * as styles from "./sectionOffers.module.scss";
import offer_1 from "../../images/offers/offer_1.png";
import offer_2 from "../../images/offers/offer_2.png";
import offer_3 from "../../images/offers/offer_3.png";
import offer_4 from "../../images/offers/offer_4.png";

const offers = [
  { img: offer_1, alt: "Obrazek biuro", title: "Biuro", price: "1000 zł/msc" },
  {
    img: offer_2,
    alt: "Obrazek biuro",
    title: "Lorem ipsum",
    price: "500 zł/msc",
  },
  {
    img: offer_3,
    alt: "Obrazek biuro",
    title: "Biuro lorem",
    price: "100 zł/h",
  },
  {
    img: offer_4,
    alt: "Obrazek biuro",
    title: "Biuro lorem ipsum Lorem",
    price: "1000 zł/msc",
  },
];

const SectionOffers = () => {
  return (
    <section className={styles.offers}>
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
    </section>
  );
};

export default SectionOffers;
