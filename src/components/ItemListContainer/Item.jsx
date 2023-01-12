import "./itemList.scss";
import React, {useState} from 'react';
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { img, nombre, precio, descuento, id } = props;
  let urlDetail = `/item/${id}`;
  const [isFavorite, setFavorite] = useState(false);

  function favorito() {
      isFavorite === true ? setFavorite(false) : setFavorite(true);
  }

  return (
    <div className="div_products">
      <Link to={urlDetail} className="div_products_link">
        <img alt="imagen producto" src={img}></img>
      </Link>
      <div className="div_nombre">
        <h3>{nombre}</h3>
        <Button onClick = {favorito} text = "❤" className = {isFavorite? "boton_favorito":"boton_no_favorito"}/>
      </div>
      <div className="div_precio">
        <p>{precio} {props.descuento? <small className="numero_descuento">{descuento}</small> : <></>}</p>
      </div>
    </div>
  );
}
