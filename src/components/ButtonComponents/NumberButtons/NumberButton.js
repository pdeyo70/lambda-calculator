import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number === '0' ? (
        <button onClick={props.clickNumberBtn} className="zero number" data-type="number">
          {props.number}
        </button>
      ) : (
        <button onClick={props.clickNumberBtn} data-type="number" className="number">{props.number}</button>
      )}
    </>
  );
};

export default NumberButton;