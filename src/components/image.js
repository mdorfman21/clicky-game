import React from "react";

function Image(props) {
  return (
    <div>
      <img
        src={props.src}
        onClick={props.handleClickedImage}
        alt={props.alt}
        reset={props.reset}
        clicked={props.clicked}
      />
    </div>
  );
}

export default Image;
