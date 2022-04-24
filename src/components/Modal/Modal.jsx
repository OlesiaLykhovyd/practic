import { useState, useEffect } from 'react';
import css from './Modal.module.css';

export default function Modal({ image, closeModal }) {
  const [loaded, setLoaded] = useState(false);

  const handleCloseModal = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={css.overlay}>
      <img
        src={`https://image.tmdb.org/t/p/w780${image}`}
        alt=""
        onLoad={onLoad}
        style={{ display: loaded ? 'block' : 'none' }}
      />
      {!loaded && <h1 style={{ fontSize: 50, color: 'white' }}>Loading</h1>}
    </div>
  );
}
