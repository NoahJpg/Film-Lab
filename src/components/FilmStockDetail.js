import React from 'react';
import PropTypes from "prop-types";
import NewFilmForm from './NewFilmForm';
import Modal from './Modal';

class FilmStockDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editModalShowing: false,
      deleteConfirmModalShowing: false,
    }
  }

  showEditModal() {
    this.setState(() => ({
      editModalShowing: true,
    }));
  }

  hideEditModal() {
    this.setState(() => ({
      editModalShowing: false,
    }));
  }

  render() {
    return(
      <div className='film-details-card'>

        <Modal 
          type='edit' 
          showing={this.state.editModalShowing} 
          headerText={`Editing ${this.props.film.name}`}
          bodyComponent={
            <NewFilmForm 
              type="edit"
              editingFilm={this.props.film} 
              onClickAddFilm={this.props.onClickEdit} 
              onCancelAddFilm={() => this.hideEditModal()} 
              returnToList={this.props.returnToList}
            />
          }
        />
        <Modal
          type='delete'
          showing={this.state.deleteConfirmModalShowing} 
          headerText={`Delete ${this.props.film.name}?`}
          bodyComponent={
            <div className='button-area'>
              <button onClick={() => this.props.onClickDelete(this.props.film.id)} className='red'>DELETE
              </button>
              <button onClick={() => this.hideDeleteModal()}>Cancel</button>
            </div>
          }
        />

        <div className='film-attribute-list'>
          <h1>{this.props.film.manufacturer} {this.props.film.name} {this.props.film.iso}</h1>
          <div>Size: {this.props.film.size}</div>
          <div>Price: ${this.props.film.price}</div>
          <div>Quantity: {this.props.film.quantity}</div>
        </div>
        <div className='details-button-area'>

          <button onClick={this.props.onClickBackToList}>Back To list</button>

          <button onClick={() => this.showEditModal()} className='yellow'>Edit
          </button>

          <button onClick={() => this.props.onClickDelete(this.props.film.id)}
          className='red'>Delete
          </button>

          <button disabled={this.props.film.quantity === 0} 
          onClick={() => this.props.onClickBuy(this.props.film.id)} 
          className='green'>Buy
          </button>

          <button onClick={() => this.props.onClickRestock(this.props.film.id)}
          className='orange'>Restock
          </button>
        </div>
      </div>
    );
  }
}

FilmStockDetail.propTypes = {
  film: PropTypes.object,
  onClickBackToList: PropTypes.func,
  onClickBuy: PropTypes.func,
  onClickRestock: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  returnToList: PropTypes.func,
}

export default FilmStockDetail;
