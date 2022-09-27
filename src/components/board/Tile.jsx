import React from "react";

function Tile(props) {
  return (
    <div onClick={(e)=>{props.func(e);}} >
      {props.s && <img src={props.s.image} alt="chess piece" />}
    </div>
  );
}

export default Tile;
