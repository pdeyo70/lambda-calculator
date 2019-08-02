import React from "react";

const OperatorButton = ({ operator: { char, value }, clickOperatorBtn }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={clickOperatorBtn} data-type="operator" className="operator">{ char }</button>
    </>
  );
};

export default OperatorButton;
