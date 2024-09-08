// src/components/Modal.jsx
import React, { useEffect } from 'react';
import './Modal.css'; // Assuming we separate modal-specific CSS

function Modal({ largeImageURL, onClose }) {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}

export default Modal;
