import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';

function ImageGallery({ images, onClick }) {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;
