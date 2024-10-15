import React from "react";

function ImageCard({ image, openModal }) {
  const handleClick = () => {
    openModal({ src: image.urls.regular, alt: image.alt_description });
  };
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageCard;
