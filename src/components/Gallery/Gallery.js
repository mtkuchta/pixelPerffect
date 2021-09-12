import * as React from "react";
import { useState, useEffect } from "react";
import * as styles from "./gallery.module.scss";
import Arrow from "../Arrow/Arrow";
import GalleryLightbox from "../GalleryLightbox/GalleryLightbox";
import { galleryImages } from "../../assets/galleryImages";

const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [openedPhoto, setOpenedPhoto] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [galleryItems, setGalleryItems] = useState([]);

  const handlePagination = (e) => {
    if (galleryImages.length === 4) return;
    if (e.target.id === "prev" && startIndex > 0) setStartIndex(startIndex - 4);
    if (e.target.id === "next") setStartIndex(startIndex + 4);
  };

  const handleOpenLightbox = (e) => {
    setOpenedPhoto(Number(e.target.parentNode.id));
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => setIsLightboxOpen(false);

  useEffect(() => {
    if (galleryImages.length <= 4) setGalleryItems(galleryImages);
    if (galleryImages.length > 4)
      setGalleryItems(galleryImages.slice(startIndex, startIndex + 4));
  }, [startIndex]);

  return (
    <section className={styles.gallery}>
      <div className={styles.contentContainer}>
        {galleryItems.map((image, index) => {
          return (
            <div
              key={`gallery_${index}`}
              id={index}
              className={styles.imgContainer}
              onClick={handleOpenLightbox}
            >
              <img src={image} alt="" />
            </div>
          );
        })}
        <p className={styles.title}>Galeria</p>
        <Arrow
          square
          style={{
            position: "absolute",
            top: "50%",
            left: "2%",
            transform: "translateY(-50%)",
          }}
          id="prev"
          onClick={handlePagination}
        />
        <Arrow
          square
          style={{
            position: "absolute",
            top: "50%",
            right: "2%",
            transform: "translateY(-50%) rotate(180deg)",
          }}
          id="next"
          onClick={handlePagination}
        />
      </div>
      <GalleryLightbox
        images={galleryImages}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        photo={openedPhoto}
      />
    </section>
  );
};

export default Gallery;
