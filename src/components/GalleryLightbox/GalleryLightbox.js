import * as React from "react";
import { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import PropTypes from "prop-types";

const GalleryLightbox = ({ images, isOpen, onClose, photo }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const handlePrevPhoto = () => {
    const prevPhotoIndex = (photoIndex + images.length - 1) % images.length;
    setPhotoIndex(prevPhotoIndex);
  };

  const handleNextPhoto = () => {
    const nextPhotoIndex = (photoIndex + 1) % images.length;
    setPhotoIndex(nextPhotoIndex);
  };

  useEffect(() => {
    setPhotoIndex(photo);
  }, [photo]);

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={onClose}
          onMovePrevRequest={handlePrevPhoto}
          onMoveNextRequest={handleNextPhoto}
        />
      )}
    </>
  );
};

GalleryLightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  photo: PropTypes.number,
};

export default GalleryLightbox;
