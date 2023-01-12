import React, { useContext } from 'react';
import { contextoApp, cantidadCarrito } from '../../storage/contextCart';

export default function CartWidget() {
  const contextoCart = useContext(contextoApp);
  const cantidad = contextoCart.cantidadCarrito();
  const condicion = cantidad > 0;
  return (
    <div>
      <span className="material-symbols-outlined">shopping_cart</span>
      {condicion && <span className='contador'>{cantidad}</span>}
    </div>
  )
}
