import * as React from "react";
import * as styles from "./sectionDetails.module.scss";
import DetailsItem from "../DetailsItem/DetailsItem";
import { detailsData } from "../../assets/detailsData";
import Arrow from "../Arrow/Arrow";

const SectionDetails = () => {
  console.log(detailsData);
  return (
    <section className={styles.sectionDetails}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h2>Lorem ipsum dolor sit amet, conse </h2>
        </div>
        {detailsData.map((item, index) => {
          return (
            <DetailsItem
              key={`detail_${index}`}
              img={item.img}
              alt={item.alt}
              description={item.description}
            />
          );
        })}
        <button className={"pageButton"} style={{ marginTop: "40px" }}>
          <span>Dowiedz się więcej</span>
          <Arrow
            direction="right"
            style={{ height: "100%", width: "20%", margin: "0" }}
            black
            square
          />
        </button>
      </div>
    </section>
  );
};

export default SectionDetails;
