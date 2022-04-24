import PropTypes from 'prop-types';
// import css from './FilmListItem.module.css'

export const FilmListItem = ({
  img,
  title,
  id,
  watched,
  toggleWatchedFilm,
  openModal,
}) => {
  return (
    <>
      <img
        onClick={() => openModal(img)}
        src={`https://image.tmdb.org/t/p/w500${img}`}
        alt={title}
      />
      <h2>{title}</h2>
      <p onClick={() => toggleWatchedFilm(id)}>
        Watched: {watched ? 'Yes' : 'No'}
        {/* Watched: {watched + ''} */}
      </p>
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
