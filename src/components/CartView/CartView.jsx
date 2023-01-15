import React, { useContext } from 'react';
import "./cartview.scss";
import { contextoApp } from '../../storage/contextCart';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { createCheckout } from '../../services/firebase';
import swal from 'sweetalert';
import Footer from '../Footer/Footer';

export default function CartView() {
    const { cart, removeItem, vaciarCarrito, getPrecioTotal } = useContext(contextoApp);

    function handleCheckout() {
        const orden = {
            comprador: {
                nombre: "Joaquin",
                email: "jfoaj@gmail.com",
                telefono: "112341",
            },
            items: cart,
            total: `$${getPrecioTotal()}`,
            date: new Date(),
        }
        createCheckout(orden).then((id) => {
            vaciarCarrito(cart);
            swal("¡Tu compra se ha realizado exitosamente!", `Tu ID de compra es ${id}. En la brevedad nos estaremos comunicando para proceder con el envio.`, "success");
        })
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
                <h2 className='titulo_carrito'>Tu carrito</h2>
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
                <div className='div_precio_total'>
                    <h3 className='precio_total'>Precio total: ${getPrecioTotal()}</h3>
                    <button onClick={() => vaciarCarrito(cart)} className="boton_vaciar-carrito">Vaciar carrito</button>
                    <Button onClick={handleCheckout} className="boton_compra" text="Finalizar Compra"/>
                </div>
                <Footer/>
            </div>
        )
    }
}
