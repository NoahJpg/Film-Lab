import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import { useState } from "react";

function NewFilmForm(props) {
  
  const [filmName, setFilmName] = useState(props.editingFilm ? props.editingFilm.name : "")
  const [filmManufacturer, setFilmManufacturer] = useState(props.editingFilm ? props.editingFilm.manufacturer : "")
  const [filmIso, setFilmIso] = useState(props.editingFilm ? props.editingFilm.iso : "")
  const [filmSize, setFilmSize] = useState(props.editingFilm ? props.editingFilm.size : "")
  const [filmPrice, setFilmPrice] = useState(props.editingFilm ? props.editingFilm.price : "")
  const [filmQuantity, setFilmQuantity] = useState(props.editingFilm ? props.editingFilm.quantity : "")
  
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
      name: e.target.name.value || e.target.name.placeholder,
      manufacturer: e.target.manufacturer.value || e.target.manufacturer.placeholder,
      iso: e.target.iso.value || e.target.iso.placeholder,
      size: e.target.size.value || e.target.size.placeholder,
      price: e.target.price.value || e.target.price.placeholder,
      quantity: e.target.quantity.value || e.target.quantity.placeholder,
      id: props.editingFilm.id,
    });
    props.returnToList();
  }
  

  return (
    <form onSubmit = {props.type === 'create' ? handleNewFilmFormSubmission : handleEditFilmFormSubmission}>
      <div className="form-row">
        <label for="name">Film name</label>
        <input placeholder={props.editingFilm && props.editingFilm.name} 
        name="name" 
        type="text" 
        value={filmName}
        onChange={(event) => setFilmName(event.target.value)}
        />
      </div>
      <div className="form-row">
        <label for="manufacturer">Manufacturer</label>
        <input placeholder={props.editingFilm && props.editingFilm.manufacturer} 
        name="manufacturer" 
        type="text"
        value={filmManufacturer}
        onChange={(event) => setFilmManufacturer(event.target.value)} 
        />
      </div>
      <div className="form-row">
        <label for="iso">ISO</label>
        <textarea placeholder={props.editingFilm && props.editingFilm.iso} 
        name="iso" 
        type="text"
        value={filmIso}
        onChange={(event) => setFilmIso(event.target.value)} 
        />
      </div>
      <div className="form-row">
        <label for="size">Size</label>
        <textarea placeholder={props.editingFilm && props.editingFilm.size} 
        name="size" 
        type="text"
        value={filmSize}
        onChange={(event) => setFilmSize(event.target.value)} 
        />
      </div>
      <div className="form-row">
        <label for="price">Price</label>
        <input placeholder={props.editingFilm && props.editingFilm.price} 
        name="price" 
        type="number"
        value={filmPrice}
        onChange={(event) => setFilmPrice(event.target.value)} 
        />
      </div>
      <div className="form-row">
        <label for="quantity">Quantity</label>
        <input placeholder={props.editingFilm && props.editingFilm.quantity} 
        name="quantity" 
        type="number"
        value={filmQuantity}
        onChange={(event) => setFilmQuantity(event.target.value)} 
        />
      </div>
      <div className="form-row buttons">
        <button type="submit" className='green' >Save</button>
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
  returnToList: PropTypes.func,
}

export default NewFilmForm;

