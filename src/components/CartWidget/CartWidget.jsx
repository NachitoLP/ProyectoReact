import React from 'react'
import { useContext } from 'react';
import { contextoApp, cantidadCarrito } from '../../storage/contextCart';

export default function CartWidget() {
  const contextoCart = useContext(contextoApp);
  const cantidad = contextoCart.cantidadCarrito();
  return (
    <div>
      <span className="material-symbols-outlined">shopping_cart</span>
      <span className='contador'>{cantidad}</span>
    </div>
  )
}
