// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Spinner from './components/Spinner/Spinner.jsx';
import Button from './components/Button/Button.jsx';
import Modal from './components/Modal/Modal.jsx'; // Import Modal
import './styles.css';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      const API_KEY = '22910062-3497cb46ee95463a66c6aaf70'; // Replace with your API key
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages((prevImages) => [...prevImages, ...response.data.hits]);
      setLoading(false);
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageURL) => {
    setModalImage(imageURL);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onClick={openModal} /> {/* ImageGallery handles clicks */}
      {loading && <Spinner />} {/* Use Spinner component */}
      {images.length > 0 && !loading && <Button onClick={loadMore} />} {/* Load more button */}
      {modalImage && <Modal largeImageURL={modalImage} onClose={closeModal} />} {/* Modal */}
    </div>
  );
}

export default App;
