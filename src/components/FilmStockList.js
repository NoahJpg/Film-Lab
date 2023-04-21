import React from "react";
import FilmStockEntry from "./FilmStockEntry";
import PropTypes from "prop-types";

function FilmStockList(props) {
  return (
    <React.Fragment>
      <h2>Film Stocks:</h2>
      <div className="film-stock-list">
        {props.FilmStockList.map(item => (
          <FilmStockEntry
            onClickViewDetails={props.handleChangingSelectedItem}
            key={item.id}
            item={item}
            />
        ))}
      </div>
    </React.Fragment>
  );
}

FilmStockList.propTypes = {
  filmStockList: PropTypes.array,
  handleChangingSelectedItem: PropTypes.func,
}

export default FilmStockList;