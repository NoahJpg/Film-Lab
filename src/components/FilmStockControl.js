import React from 'react';
import Header from './Header';
import FilmStockList from './FilmStockList';
import { v4 } from 'uuid';
import NewFilmForm from './NewFilmForm';
import FilmStockDetail from './FilmStockDetail';

class FilmStockControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NewFilmFormShowing: false,
      filmList: [],
      selectedFilm: null,
    };
  }

  getFilmByID = (id, list = this.state.filmList) => {
    return list.filter(film => film.id === id) [0]
  }

  handleClickBackToList = () => {
    this.setState(() => ({
      selectedFilm: null,
    }));
  }

  handleBuyFilm = (id) => {
    const newFilmList = [...this.state.filmList];
    const depletedFilm = this.getFilmByID(id, newFilmList);
    depletedFilm.quantity = parseInt(depletedFilm.quantity -1);
    this.setState({
      filmList: newFilmList,
    });
  }

  
}