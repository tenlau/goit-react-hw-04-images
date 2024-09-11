import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Spinner from './components/Spinner/Spinner.jsx';
import Button from './components/Button/Button.jsx';
import Modal from './components/Modal/Modal.jsx';
import './styles.css';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const API_KEY = '22910062-3497cb46ee95463a66c6aaf70'; // Replace with your API key

  const fetchImages = useCallback(async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages((prevImages) => [...prevImages, ...response.data.hits]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleSearchSubmit = useCallback((newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }, []);

  const loadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const openModal = useCallback((imageURL) => {
    setModalImage(imageURL);
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
  }, []);

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onClick={openModal} />
      {loading && <Spinner />}
      {images.length > 0 && !loading && <Button onClick={loadMore} />}
      {modalImage && <Modal largeImageURL={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
