import "./itemList.scss";
import React , {useState, useEffect} from 'react';
import Item from "./Item";
import {Link} from "react-router-dom"
import itemDestacado, {itemOfertas, itemRemera, itemPantalon, itemOtro, ropaVarios, perfumeVarios} from "../../services/mockServices";

export default function ItemListDestacados() {
  const [destacados, setDestacados] = useState([]);

  useEffect( () => {
    itemDestacado()
    .then((arrayDestacado) => { setDestacados(arrayDestacado)
    })
}, [])

  return (
    <div className="div_cards">
      {destacados.map((item) => (
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

export function ItemListOfertas() {
  const [ofertas, setOfertas] = useState([]);

  useEffect( () => {
    itemOfertas()
    .then((arrayOfertas) => { setOfertas(arrayOfertas)
    })
}, [])

  return (
    <div className="div_cards">
      {ofertas.map((item) => (
        <Item
          img = {item.img}
          nombre = {item.nombre}
          precioAnt = {item.precioAnt}
          precio = {item.precio}
          id = {item.id}
          porcentajeOff = {item.porcentajeOff}
        />
      ))}
    </div>
  )
}

export function ItemRopaVarios() {
  const [varios, setVarios] = useState([]);

  useEffect( () => {
    ropaVarios()
    .then((arrayVarios) => { setVarios(arrayVarios)
    })
}, [])

  return (
    <div>
      <div className="titulo_redirigir">
        <h3>Ropa</h3>
        <Link to="/categoria/ropa">Ver más</Link>
      </div>
      <div className="div_cards">
        {varios.map((item) => (
          <Item
            img = {item.img}
            nombre = {item.nombre}
            precioAnt = {item.precioAnt}
            precio = {item.precio}
            id = {item.id}
            porcentajeOff = {item.porcentajeOff}
          />
        ))}
      </div>
    </div>
  )
}

export function ItemPerfumeVarios() {
  const [variosP, setVariosP] = useState([]);

  useEffect( () => {
    perfumeVarios()
    .then((arrayVariosP) => { setVariosP(arrayVariosP)
    })
}, [])

  return (
    <div>
      <div className="titulo_redirigir">
        <h3>Perfumes</h3>
        <Link to="/categoria/perfumeria">Ver más</Link>
      </div>
      <div className="div_cards">
        {variosP.map((item) => (
          <Item
            img = {item.img}
            nombre = {item.nombre}
            precioAnt = {item.precioAnt}
            precio = {item.precio}
            id = {item.id}
            porcentajeOff = {item.porcentajeOff}
          />
        ))}
      </div>
    </div>
  )
}

export function ItemListRemera() {
  const [remera, setRemera] = useState([]);

  useEffect( () => {
    itemRemera()
    .then((arrayRemera) => { setRemera(arrayRemera)
    })
}, [])

  return (
    <div>
      <h3>Remeras</h3>
      <div className="div_cards">
        {remera.map((item) => (
          <Item
            img = {item.img}
            nombre = {item.nombre}
            precio = {item.precio}
            id = {item.id}
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
    .then((arrayOtro) => { setOtro(arrayOtro)
    })
}, [])

  return (
    <div>
      <h3>Otros objetos</h3>
      <div className="div_cards">
        {otro.map((item) => (
          <Item
            img = {item.img}
            nombre = {item.nombre}
            precio = {item.precio}
            id = {item.id}
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
    .then((arrayPantalon) => { setPantalon(arrayPantalon)
    })
}, [])

  return (
    <div>
      <h3>Pantalones</h3>
      <div className="div_cards">
        {pantalon.map((item) => (
          <Item
            img = {item.img}
            nombre = {item.nombre}
            precio = {item.precio}
            id = {item.id}
          />
        ))}
      </div>
    </div>
  )
}



