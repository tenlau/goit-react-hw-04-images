// src/components/ImageGallery.jsx
import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
//import './ImageGallery.css'; // Optional: Separate styles if needed

function ImageGallery({ images, onClick }) {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={onClick} // Pass the onClick function to open the modal
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
