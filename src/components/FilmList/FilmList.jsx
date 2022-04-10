import PropTypes from 'prop-types';
import { FilmListItem } from 'components/FilmListItem/FilmListItem';

export const FilmList = ({ films, onDeleteFilm, toggleWatchedFilm }) => {
  return (
    <ul>
      {films.map(({ img, id, title, watched }) => (
        <li key={id}>
          <FilmListItem
            img={img}
            title={title}
            id={id}
            watched={watched}
            toggleWatchedFilm={toggleWatchedFilm}
            onDeleteFilm={onDeleteFilm}
          />
        </li>
      ))}
    </ul>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      watched: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteFilm: PropTypes.func.isRequired,
  toggleWatchedFilm: PropTypes.func.isRequired,
};
