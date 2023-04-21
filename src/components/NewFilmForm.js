import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewFilmForm(props) {

  function handleNewFilmFormSubmission(e) {
    e.preventDefault();
    props.onClickAddItem({
      manufacturer: e.target.manufacturer.value,
      name: e.target.name.value,
      size: e.target.size.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      id: v4(),
    })
  }

  function handleEditFilmFormSubmission(e) {
    e.preventDefault();
    props.onClickAddItem({
      manufacturer: e.target.manufacturer.value || e.target.manufacturer.placeholder,
      name: e.target.name.value || e.target.name.placeholder,
      size: e.target.size.value || e.target.size.placeholder,
      price: e.target.price.value || e.target.price.placeholder,
      quantity: e.target.quantity.value || e.target.quantity.placeholder,
      id: props.editingItem.id,
    })
  }

  return (
    <form onSubmit = {props.type === 'create' ? handleNewFilmFormSubmission : handleEditFilmFormSubmission}>
      <div className="form-row">
        <label for="manufacturer">Manufacturer</label>
        <input placeholder={props.editingItem && props.editingItem.manufacturer} name="manufacturer" type="text" />
      </div>
      <div className="form-row">
        <label for="name">Item name</label>
        <input placeholder={props.editingItem && props.editingItem.name} name="name" type="text" />
      </div>
      <div className="form-row">
        <label for="size">Size</label>
        <textarea placeholder={props.editingItem && props.editingItem.size} name="size" type="text" />
      </div>
      <div className="form-row">
        <label for="price">Price</label>
        <input placeholder={props.editingItem && props.editingItem.price} name="price" type="number" />
      </div>
      <div className="form-row">
        <label for="quantity">Quantity</label>
        <input placeholder={props.editingItem && props.editingItem.quantity} name="quantity" type="number" />
      </div>
      <div className="form-row buttons">
        <button className='green'>Save</button>
        <button onClick={props.onCancelAddItem} type='button'>Cancel</button>
      </div>
    </form>
  );
}

NewFilmForm.propType = {
  onClickAddItem: PropTypes.func,
  onCancelAddItem: PropTypes.func,
  type: PropTypes.string,
  editingItem: PropTypes.object,
}

export default NewFilmForm;

