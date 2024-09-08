// src/components/ImageGalleryItem.jsx
import React from 'react';
import './ImageGalleryItem.css'; // Assuming separate styles

function ImageGalleryItem({ image, onClick }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags}
        className="ImageGalleryItem-image"
        onClick={() => onClick(image.largeImageURL)} // Pass large image URL to open modal
      />
    </li>
  );
}

export default ImageGalleryItem;
