import data from 'data.json';
import { Component } from 'react';
import { mapper } from 'utils/mapper';
import { FilmList } from './FilmList/FilmList';
import { Button } from './Button/Button';

export default class App extends Component {
  state = {
    films: mapper(data),
    isVisiable: false,
  };

  toggleVisibility = () => {
    this.setState(prevState => ({
      isVisiable: !prevState.isVisiable,
    }));
  };

  deleteFilm = delId => {
    this.setState(prevState => ({
      films: prevState.films.filter(({ id }) => id !== delId),
    }));
  };

  toggleWatchedFilm = currentId => {
    this.setState(prevState => ({
      films: prevState.films.map(film => {
        if (film.id === currentId) {
          return { ...film, watched: !film.watched };
        }
        return film;
      }),
    }));
  };

  render() {
    const { isVisiable, films } = this.state;
    return (
      <>
        <h1>Filmoteka</h1>
        <Button
          toggleVisibility={this.toggleVisibility}
          isVisiable={isVisiable}
        />
        {isVisiable && (
          <FilmList
            films={films}
            onDeleteFilm={this.deleteFilm}
            toggleWatchedFilm={this.toggleWatchedFilm}
          />
        )}
      </>
    );
  }
}
