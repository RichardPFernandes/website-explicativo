import './Card.css';
import React, { useState } from "react";

function Card(props) {

    return (
      <>
        <div className="card" onClick={props.onClick}>
          <img className="card-imagem" src={props.imagem} />
        </div>
      </>
    );
}

export default Card;