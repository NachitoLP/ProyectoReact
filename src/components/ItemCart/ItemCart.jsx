import React, { useContext } from 'react';
import { contextoApp } from '../../storage/contextCart';
import Button from '../Button/Button';

export default function ItemCart() {
    const { cart, removeItem } = useContext(contextoApp)
    return (
        <div>
            <div className="div_cards div_cards_2">
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
        </div>
    )
}
