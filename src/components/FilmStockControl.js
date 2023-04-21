import React from 'react';
import Header from './Header';
import FilmStockList from './FilmStockList';
import { v4 } from 'uuid';
import NewFilmForm from './NewFilmForm';
import FilmStockDetail from './FilmStockDetail';
import Modal from './Modal';

class FilmStockControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFilmFormShowing: false,
      filmList: [
        {
          name: "Portra",
          manufacturer: "Kodak",
          iso: "800",
          size: "35mm",
          price: "13",
          quantity: "100",
          id: v4(),
        },
        {
          name: "Portra",
          manufacturer: "Kodak",
          iso: "400",
          size: "120",
          price: "10",
          quantity: "100",
          id: v4(),
        },
        {
          name: "HP5",
          manufacturer: "Ilford",
          iso: "400",
          size: "35mm",
          price: "9",
          quantity: "200",
          id: v4(),
        },

      ],
      selectedFilm: null,
    };
  }

  getFilmById = (id, list = this.state.filmList) => {
    return list.filter(film => film.id === id)[0]
  }

  handleClickBackToList = () => {
    this.setState(() => ({
      selectedFilm: null,
    }));
  }

  handleBuyFilm = (id) => {
    const newFilmList = [...this.state.filmList];
    const depletedFilm = this.getFilmById(id, newFilmList);
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
      newFilmFormShowing: true,
    }));
  };

  handleCancelAddingNewFilm = () => {
    this.setState(() => ({
      newFilmFormShowing: false,
    }));
  };

  handleChangingSelectedFilm = (id) => {
    const newSelectedFilm = this.getFilmById(id);
    this.setState({ selectedFilm: newSelectedFilm });
  };

  handleAddingNewFilm = (newFilm) => {
    const newFilmList = [...this.state.filmList];
    newFilmList.push(newFilm);
    this.setState({
      filmList: newFilmList,
      newFilmFormShowing: false,
    });
  };

  handleEditingFilm = (newFilm, callback) => {
    this.setState(prevState => {
      const newFilmList = prevState.filmList.map(film => {
        if (film.id === newFilm.id) {
          return newFilm;
        } else {
          return film;
        }
      });
  
      return { filmList: newFilmList };
    }, callback);
  }
  


  render() {
    return ( 
      <React.Fragment>
        <Header />
        <main className={this.state.newFilmFormShowing ? 'veiled' : ''}>
          {
            this.state.selectedFilm === null ?
            <React.Fragment>
              <FilmStockList
                filmList={this.state.filmList}
                handleChangingSelectedFilm={this.handleChangingSelectedFilm}
                />
                <button className={this.state.newFilmFormShowing || "green"} 
                        onClick={this.handleClickAddNewFilm}>Add new Film
                </button>

              <Modal 
                showing={this.state.newFilmFormShowing}
                headerText={'Add new film'}
                bodyComponent={<NewFilmForm 
                  type='create' 
                  onClickAddFilm={this.handleAddingNewFilm} 
                  onCancelAddFilm={this.handleCancelAddingNewFilm} 
                  handleEditingFilm={this.handleEditingFilm} 
                  />}
              />

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
