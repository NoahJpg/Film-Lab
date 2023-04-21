import React from 'react';
import PropTypes from "prop-types";

function Modal(props) {

  return (
    <div className={`modal${props.showing ? ' showing' : ''}`}>
      <h2>{props.headerText}</h2>
      {props.bodyComponent}
    </div>
  );
}

Modal.propTypes = {
  showing: PropTypes.bool,
  bodyComponent: PropTypes.object,
  headerText: PropTypes.string,
};

export default Modal;
