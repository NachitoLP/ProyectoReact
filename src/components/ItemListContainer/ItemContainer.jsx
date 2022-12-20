import "./itemList.scss";
import React , {useState, useEffect} from 'react';
import Item from "./Item";
import { useParams } from "react-router-dom";
import itemsGeneral, { getItemCategory } from "../../services/mockServices";

export default function ItemListGeneral() {
  const [productos, setProductos] = useState([]);
  let catID = useParams().catID;

  useEffect( () => {
    if(catID === undefined){
      itemsGeneral()
      .then((arrayProductos) => { setProductos(arrayProductos) })
    }
    else{
      getItemCategory(catID)
      .then((arrayCategoria) => { setProductos(arrayCategoria) })
    }
}, [catID])

  return (
    <div className="div_cards">
      {productos.map((item) => (
        <Item
          img = {item.img}
          nombre = {item.nombre}
          precio = {item.precio}
          id = {item.id}
        />
      ))}
    </div>
  )
}



