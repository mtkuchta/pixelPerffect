import * as React from "react";
import * as styles from "./gallery.module.scss";
import gallery_1 from "../../images/gallery/gallery_1.png";
import gallery_2 from "../../images/gallery/gallery_2.png";
import gallery_3 from "../../images/gallery/gallery_3.png";
import gallery_4 from "../../images/gallery/gallery_4.png";
import Arrow from "../Arrow/Arrow";

const galleryImages = [gallery_1, gallery_2, gallery_3, gallery_4];

const Gallery = () => {
  return (
    <section className={styles.gallery}>
      <div className={styles.contentContainer}>
        {galleryImages.map((image, index) => {
          return (
            <div className={styles.imgContainer}>
              <img src={image} alt="" />
            </div>
          );
        })}
        <p className={styles.title}>Galeria</p>
        <Arrow
          square
          small
          style={{
            position: "absolute",
            top: "50%",
            left: "2%",
            transform: "translateY(-50%)",
          }}
        />
        <Arrow
          square
          small
          style={{
            position: "absolute",
            top: "50%",
            right: "2%",
            transform: "translateY(-50%) rotate(180deg)",
          }}
        />
      </div>
    </section>
  );
};

export default Gallery;
