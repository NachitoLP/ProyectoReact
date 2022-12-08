import "./itemList.scss";
import React , {useState, useEffect} from 'react';
import Item from "./Item";
import itemDestacado, {itemOfertas, itemRemera, itemPantalon, itemOtro} from "../../services/mockServices";

export default function ItemListDestacados() {
  const [destacados, setDestacados] = useState([]);

  useEffect( () => {
    itemDestacado()
    .then((arrayDestacados) => setDestacados(arrayDestacados))
    }, []
  )

  return (
    <div className="div_cards">
      {destacados.map((item) => (
        <Item
          img = {item.img}
          nombre = {item.nombre}
          precio = {item.precio}
        />
      ))}
    </div>
  )
}

export function ItemListOfertas() {
  const [ofertas, setOfertas] = useState([]);

  useEffect( () => {
    itemOfertas()
    .then((arrayOfertas) => setOfertas(arrayOfertas))
    }, []
  )

  return (
    <div className="div_cards">
      {ofertas.map((item) => (
        <Item
          img = {item.img}
          nombre = {item.nombre}
          precioAnt = {item.precioAnt}
          precio = {item.precio}
          porcentajeOff = {item.porcentajeOff}
        />
      ))}
    </div>
  )
}

export function ItemListRemera() {
  const [remera, setRemera] = useState([]);

  useEffect( () => {
    itemRemera()
    .then((arrayRemera) => setRemera(arrayRemera))
    }, []
  )

  return (
    <div>
      <h3>Remeras</h3>
      <div className="div_cards">
        {remera.map((item) => (
          <Item
            img = {item.img}
            nombre = {item.nombre}
            precio = {item.precio}
          />
        ))}
      </div>
    </div>
  )
}

export function ItemListOtro() {
  const [otro, setOtro] = useState([]);

  useEffect( () => {
    itemOtro()
    .then((arrayOtro) => setOtro(arrayOtro))
    }, []
  )

  return (
    <div>
      <h3>Otros objetos</h3>
      <div className="div_cards">
        {otro.map((item) => (
          <Item
            img = {item.img}
            nombre = {item.nombre}
            precio = {item.precio}
          />
        ))}
      </div>
    </div>
  )
}

export function ItemListPantalon() {
  const [pantalon, setPantalon] = useState([]);

  useEffect( () => {
    itemPantalon()
    .then((arrayPantalon) => setPantalon(arrayPantalon))
    }, []
  )

  return (
    <div>
      <h3>Pantalones</h3>
      <div className="div_cards">
        {pantalon.map((item) => (
          <Item
            img = {item.img}
            nombre = {item.nombre}
            precio = {item.precio}
          />
        ))}
      </div>
    </div>
  )
}



