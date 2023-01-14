import React, { useContext } from 'react';
import Item from '../ItemListContainer/Item';
import "./cartview.scss";
import { contextoApp } from '../../storage/contextCart';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CartView() {
    const { cart } = useContext(contextoApp);
    const [ newCart, setNewCart ] = useState([]);

    function removeItem(product) {
        const itemFiltrado = cart.find((item) => item === product)
        const index = cart.indexOf(itemFiltrado);
        if (index>-1) {
            cart.splice(index,1)
            setNewCart(cart);
        }
    }
    

    if (cart.length === 0) {
        return (
            <div className='div_carrito_vacio'>
                <h2>¡Ups! El carrito se encuentra vacío.</h2>
                <Link to="/" className='link_volver'>Volver al inicio</Link>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2 className='titulo_carrito'>Bienvenido al carrito</h2>
                <div className="div_cards">
                    {cart.map((product) => (
                    <div className="div_products div_products_2">
                        <img alt="imagen producto" src={product.img}></img>
                        {product.count? <p className='cantidad_agregado'>{product.count}</p> : <></>}
                        <div className="div_nombre">
                            <h3>{product.nombre}</h3>
                        </div>
                        <div className="div_precio">
                            <p>{product.precio} {product.descuento? <small className="numero_descuento">{product.descuento}</small> : <></>}</p>
                        </div>
                        <Button onClick={() => removeItem(product)} className="eliminar_producto" text="X"/>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}
