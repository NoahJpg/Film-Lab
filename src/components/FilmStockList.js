import React from "react";
import FilmStockEntry from "./FilmStockEntry";
import PropTypes from "prop-types";

function FilmStockList(props) {
  return (
    <React.Fragment>
      <h2>Film Stocks:</h2>
      <div className="film-stock-list">
        {props.filmList.map(film => 
          <FilmStockEntry
            onClickViewDetails={props.handleChangingSelectedFilm}
            key={film.id}
            film={film}
            />
        )}
      </div>
    </React.Fragment>
  );
}

FilmStockList.propTypes = {
  filmStockList: PropTypes.array,
  handleChangingSelectedFilm: PropTypes.func,
}

export default FilmStockList;