import React, { useContext } from 'react';
import "./cartview.scss";
import { contextoApp } from '../../storage/contextCart';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function CartView() {
    const { cart, removeItem } = useContext(contextoApp);
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
                <h2 className='titulo_carrito'>Tu carrito</h2>
                <div className="div_cards">
                    {cart.map((product) => (
                    <div className="div_products div_products_2">
                        <img alt="imagen producto" src={product.img}></img>
                        {product.count? <p className='cantidad_agregado'>{product.count}</p> : <></>}
                        <div className="div_nombre">
                            <h3>{product.nombre}</h3>
                        </div>
                        <div className="div_precio">
                            <p>${product.precio} {product.descuento? <small className="numero_descuento">{product.descuento}</small> : <></>}</p>
                        </div>
                        <Button onClick={() => 
                            {
                                removeItem(product)
                            }
                            } className="eliminar_producto" text="X"/>
                    </div>
                ))}
                </div>
                <div className='div_precio_total'>
                    <h3 className='precio_total'>Precio total:</h3>
                    <Button onClick={() => {alert("Felicitaciones, has realizado una compra.")}} className="boton_compra" text="Finalizar Compra"/>
                </div>
            </div>
        )
    }
}
