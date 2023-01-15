import "./itemList.scss";
import React , {useState, useEffect} from 'react';
import Item from "./Item";
import { useParams } from "react-router-dom";
import { itemsGeneral, getItemCategory } from "../../services/firebase";
import Loader from "../Loader/Loader";

export default function ItemListGeneral() {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let catID = useParams().catID;

  useEffect( () => {
    if(catID === undefined){
      itemsGeneral()
      .then((arrayProductos) => { 
        setProductos(arrayProductos)
        setIsLoading(false) 
      })
    }
    else{
      getItemCategory(catID)
      .then((arrayCategoria) => { 
        setProductos(arrayCategoria)
        setIsLoading(false) 
      })
    }
}, [catID])

  return (
    <div>
      { isLoading? <Loader/>
      :
      <div className="div_cards">
        {productos.map((item) => (
          <Item
            img = {item.img}
            nombre = {item.nombre}
            precio = {item.precio}
            id = {item.id}
            descuento = {item.descuento}
          />
        ))}
      </div>
      }
    </div>
  )
}



