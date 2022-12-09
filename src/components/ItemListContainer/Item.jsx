import "./itemList.scss";
import React from 'react';
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { img, nombre, precio, precioAnt, porcentajeOff, id } = props;
  let urlDetail = `/item/${id}`;
  return (
    <div className="div_products">
      <Link to={urlDetail} className="div_products_link">
        <img alt="imagen producto" src={img}></img>
      </Link>
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
