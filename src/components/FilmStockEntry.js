import PropTypes from "prop-types";

function FilmStockEntry(props) {

  return (
    <div className='film-stock-entry'>
      <div>Manufacturer: {props.item.manufacturer}</div>
      <div>Name: {props.item.name}</div>
      <div>ISO: {props.item.iso}</div>
      <div>Size: {props.item.size}</div>
      <div>Price: ${props.item.price}</div>
      <div>Quantity: {props.item.quantity}</div>
      <div>{props.item.id}</div>
      <div className='button-area'>
        <button onClick={() => props.onClickViewDetails(props.item.id)}>View Details</button>
      </div>
    </div>
  );
}

FilmStockEntry.propTypes = {
 item: PropTypes.object,
 onClickViewDetails: PropTypes.func,
};

export default FilmStockEntry;
