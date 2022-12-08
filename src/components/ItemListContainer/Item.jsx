import "./itemList.scss";
import React from 'react';
import Button from "../Button/Button";

export default function Item(props) {
  const { img, nombre, precio, precioAnt, porcentajeOff } = props;
  return (
    <div className="div_products">
      <img alt="imagen producto" src={img}></img>
      <div className="div_nombre">
        <h3>{nombre}</h3>
        <Button/>
      </div>
      <div className="div_precio">
        <p className="precio_tachado">{precioAnt}</p>
        <p>{precio}</p>
        <p className="porcentaje_off">{porcentajeOff}</p>
      </div>
    </div>
  );
}
