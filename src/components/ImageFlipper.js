import React, { useState, useEffect } from "react";
import "./ImageFlipper.css"; // Create and import your CSS for styling

const ImageFlipper = ({ images, source }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = (event) => {
    const { clientWidth, clientX } = event.target;
    const isLeft = clientX < clientWidth / 2;

    if (isLeft) {
      // Flip left
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else {
      // Flip right
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className={`image-flipper ${source}`} onClick={handleImageClick}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default ImageFlipper;
