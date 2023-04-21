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

  handleRestockFilm = (id) => {
    const newFilmList = [...this.state.filmList];
    const restockedFilm = this.getFilmById(id, newFilmList);
    restockedFilm.quantity = parseInt(restockedFilm.quantity + 1);
    this.setState({
      filmList: newFilmList,
    });
  }

  handleDeleteFilm = (id) => {
    const newFilmList = [...this.state.filmList];
    const doomedFilm = this.getFilmById(id, newFilmList);
    newFilmList.splice(newFilmList.indexOf(doomedFilm), 1);
    this.setState({
      filmList: newFilmList,
      selectedFilm: null,
    });
  }

  handleClickAddNewFilm = () => {
    this.setState(() => ({
      NewFilmFormShowing: true,
    }));
  };

  handleCancelAddingNewFilm = () => {
    this.setState(() => ({
      NewFilmFormShowing: false,
    }));
  };

  handleChangingSelectedFilm = (id) => {
    const newSelectedFilm = this.getFilmByID(id);
    this.setState({ selectedFilm: newSelectedFilm });
  };

  handleAddingNewFilm = (newFilm) => {
    const newFilmList = [...this.state.filmList];
    newFilmList.push(newFilm);
    this.setState({
      filmList: newFilmList,
      NewFilmFormShowing: false,
    });
  };

  handleEditingFilm = (newFilm) => {
    const newFilmList = [...this.state.filmList];
    
    const deletedFilm = this.getFilmByID(newFilm.id, newFilmList)
    newFilmList.splice(newFilmList.indexOf(deletedFilm), 1);

    newFilmList.push(newFilm);

    this.setState({
      filmList: newFilmList,
    });
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <main className={this.state.NewFilmFormShowing ? 'veiled' : ''}>
          {
            this.state.selectedFilm === null ?
            <React.Fragment>
              <FilmStockList
                filmList={this.state.filmList}
                handleChangingSelectedFilm={this.handleChangingSelectedFilm}
                />
                <button className={this.state.NewFilmFormShowing || "green"} 
                        onClick={this.handleClickAddNewFilm}>Add new Item
                </button>
            </React.Fragment>
            :
            <FilmStockDetail
              film={this.state.selectedFilm}
              onClickBackToList={this.handleClickBackToList}
              onClickBuy={this.handleBuyFilm}
              onClickRestock={this.handleRestockFilm}
              onClickDelete={this.handleDeleteFilm}
              onClickEdit={this.handleEditingFilm}
            />
          }
        </main>
      </React.Fragment>
    );
  }
}

export default FilmStockControl;
