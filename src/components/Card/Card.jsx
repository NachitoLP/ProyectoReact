import "./card.scss";
import React , {useState} from 'react';
import Button from "../Button/Button";

export default function Card(props) {
  const {texto,img,precio} = props;
  return (
    <div className="div_products">
      <img alt="imagen producto" src={img}></img>
      <div className="div_nombre">
        <h3>{texto}</h3>
        <Button/>
      </div>
      <p>{precio}</p>
    </div>
  );
}
