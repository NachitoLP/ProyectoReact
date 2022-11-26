import "./card.css";
import React from 'react'

export default function Card(props) {
    const {texto,img,precio} = props;
  return (
    <div className="div_products">
      <img alt="imagen producto" src={img}></img>
      <h3>{texto}</h3>
      <p>{precio}</p>
    </div>
  );
}
