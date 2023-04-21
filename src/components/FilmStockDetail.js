import React from 'react';
import PropTypes from "prop-types";
import NewFilmForm from './NewFilmForm';
import Modal from './Modal';

class FilmStockDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editModalShowing: false,
      deleteConfrimModalShowing: false,
    }
  }

  showEditModal() {
    this.setState(() => ({
      editModalShowing: true,
    }));
  }

  hideEditModal() {
    this.setState(() => ({
      editModalShowing: true,
    }));
  }

  render() {
    return(
      <div className='film-details-card'>

        <Modal 
          showing={this.state.editModalShowing} 
          headerText="Edit modal" 
          bodyComponent={<NewFilmForm editingFilm={this.props.film} type='edit' onClickAddFilm={this.props.onClickEdit} onCancelAddFilm={() => this.hideEditModal()} />}
        />

        <div className='film-attribute-list'>
          <h1>{this.props.film.name}</h1>
          <div>Manufacturer: {this.props.film.manufacturer}</div>
          <div>{this.props.film.description}</div>
          <div>Price: ${this.props.film.price}</div>
          <div>Quantity: {this.props.film.quantity}</div>
          <div>{this.props.film.id}</div>
        </div>
        <div className='details-button-area'>
          <button onClick={this.props.onClickBackToList}>Back To list</button>
          <button onClick={() => this.showEditModal()} className='yellow'>Edit</button>
          <button onClick={() => this.props.onClickDelete(this.props.film.id)}
          className='red'>Delete</button>
          <button disabled={this.props.film.quantity === 0} onClick={() => this.props.onClickBuy(this.props.film.id)} className='green'>Buy</button>
          <button onClick={() => this.props.onClickRestock(this.props.item.id)}
          className='orange'>Restock</button>
        </div>
      </div>
    );
  }
}

export default FilmStockDetail;
