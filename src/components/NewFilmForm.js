import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewFilmForm(props) {

  function handleNewFilmFormSubmission(e) {
    e.preventDefault();
    props.onClickAddFilm({
      name: e.target.name.value,
      manufacturer: e.target.manufacturer.value,
      iso: e.target.iso.value,
      size: e.target.size.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      id: v4(),
    })
  }

  function handleEditFilmFormSubmission(e) {
    e.preventDefault();
    props.onClickAddFilm({
      name: e.target.name.value || e.target.name.value,
      manufacturer: e.target.manufacturer.value || e.target.manufacturer.value,
      iso: e.target.iso.value || e.target.iso.value,
      size: e.target.size.value || e.target.size.value,
      price: e.target.price.value || e.target.price.value,
      quantity: e.target.quantity.value || e.target.quantity.value,
      id: props.editingFilm.id,
    })
  }

  return (
    <form onSubmit = {props.type === 'create' ? handleNewFilmFormSubmission : handleEditFilmFormSubmission}>
      <div className="form-row">
        <label for="name">Film name</label>
        <input value={props.editingFilm && props.editingFilm.name} 
        name="name" 
        type="text" 
        onChange={(e) => props.handleEditingFilm({ ...props.editingFilm, name: e.target.value })}/>
      </div>
      <div className="form-row">
        <label for="manufacturer">Manufacturer</label>
        <input value={props.editingFilm && props.editingFilm.manufacturer} 
        name="manufacturer" 
        type="text" 
        onChange={(e) => props.handleEditingFilm({ ...props.editingFilm, name: e.target.value })}/>
      </div>
      <div className="form-row">
        <label for="iso">ISO</label>
        <textarea value={props.editingFilm && props.editingFilm.iso} 
        name="iso" 
        type="text"
        onChange={(e) => props.handleEditingFilm({ ...props.editingFilm, name: e.target.value })}/>
      </div>
      <div className="form-row">
        <label for="size">Size</label>
        <textarea value={props.editingFilm && props.editingFilm.size} 
        name="size" 
        type="text"
        onChange={(e) => props.handleEditingFilm({ ...props.editingFilm, name: e.target.value })}/>
      </div>
      <div className="form-row">
        <label for="price">Price</label>
        <input value={props.editingFilm && props.editingFilm.price} 
        name="price" 
        type="number"
        onChange={(e) => props.handleEditingFilm({ ...props.editingFilm, name: e.target.value })}/>
      </div>
      <div className="form-row">
        <label for="quantity">Quantity</label>
        <input value={props.editingFilm && props.editingFilm.quantity} 
        name="quantity" 
        type="number"
        onChange={(e) => props.handleEditingFilm({ ...props.editingFilm, name: e.target.value })}/>
      </div>
      <div className="form-row buttons">
        <button className='green'>Save</button>
        <button onClick={props.onCancelAddFilm} 
        type='button'>Cancel</button>
      </div>
    </form>
  );
}

NewFilmForm.propTypes = {
  onClickAddFilm: PropTypes.func,
  onCancelAddFilm: PropTypes.func,
  type: PropTypes.string,
  editingFilm: PropTypes.object,
}

export default NewFilmForm;

