import PropTypes from "prop-types";

function FilmStockEntry(props) {

  return (
    <div className='film-stock-entry'>
      <div>{props.film.name}</div>
      <div>Manufacturer: {props.film.manufacturer}</div>
      <div>ISO: {props.film.iso}</div>
      <div>Size: {props.film.size}</div>
      <div>Price: ${props.film.price}</div>
      <div>Quantity: {props.film.quantity}</div>
      <div className='button-area'>
        <button onClick={() => 
          props.onClickViewDetails(props.film.id)}>View Details
        </button>
        <hr />
      </div>
    </div>
  );
}

FilmStockEntry.propTypes = {
 film: PropTypes.object,
 onClickViewDetails: PropTypes.func,
};

export default FilmStockEntry;

