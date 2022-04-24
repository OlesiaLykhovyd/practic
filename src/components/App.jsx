import { useState, useEffect } from 'react';
import { mapper } from 'utils/mapper';
import { FilmList } from './FilmList/FilmList';
import { fetchFilms } from '../api/api';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';

export const App = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState('');

  useEffect(() => {
    setIsLoading(true);

    fetchFilms(page)
      .then(({ data }) => {
        const mapperFilms = mapper(data.results);
        setFilms(prevFilms => [...prevFilms, ...mapperFilms]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(setIsLoading(false));
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleWatchedFilms = id => {
    setFilms(prevFilms =>
      prevFilms.map(film => {
        if (film.id === id) {
          return {
            ...film,
            watched: !film.watched,
          };
        }
        return film;
      })
    );
  };

  const openModal = image => {
    setImage(image);
  };

  const closeModal = () => {
    setImage('');
  };

  return (
    <>
      <h1>Filmoteka</h1>
      {isLoading && <h1>Loading...</h1>}
      <FilmList
        openModal={openModal}
        films={films}
        toggleWatchedFilm={toggleWatchedFilms}
      />
      {films.length > 0 && <Button onClick={loadMore} />}
      {image && <Modal image={image} closeModal={closeModal} />}
    </>
  );
};
