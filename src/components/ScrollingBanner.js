import React from "react";
import "./ScrollingBanner.css"; // Make sure to create this CSS file

const ScrollingBanner = ({ images }) => {
  return (
    <div className="scrolling-banner">
      {images.concat(images).map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Game ${index}`}
          className="banner-image"
        />
      ))}
    </div>
  );
};

export default ScrollingBanner;
