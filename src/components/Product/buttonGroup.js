import React, { useState } from "react";
import './buttonGroup.css'

const ButtonGroup = ({ buttons, afterClick }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
    afterClick(event);
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={i === clickedId ? "productButton active" : "productButton"}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;