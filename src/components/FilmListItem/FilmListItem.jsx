import PropTypes from 'prop-types';

export const FilmListItem = ({
  img,
  title,
  id,
  watched,
  onDeleteFilm,
  toggleWatchedFilm,
}) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
      <h2>{title}</h2>
      <p onClick={() => toggleWatchedFilm(id)}>
        Watched: {watched ? 'Yes' : 'No'}
        {/* Watched: {watched + ''} */}
      </p>
      <button type="button" onClick={() => onDeleteFilm(id)}>
        Delete
      </button>
    </>
  );
};

FilmListItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  watched: PropTypes.bool.isRequired,
  onDeleteFilm: PropTypes.func.isRequired,
  toggleWatchedFilm: PropTypes.func.isRequired,
};
