import React from "react";
import axios from "axios";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ images, openModal }) {
  return (
    <div>
      <ul className={css.list}>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ImageGallery;
