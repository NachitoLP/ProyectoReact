import React, { useContext } from 'react';
import "./cartview.scss";
import { contextoApp } from '../../storage/contextCart';
import { Link } from 'react-router-dom';
import { createCheckout } from '../../services/firebase';
import swal from 'sweetalert';
import Footer from '../Footer/Footer';
import ItemCart from '../ItemCart/ItemCart';
import Form from '../FormComprador/Form';

export default function CartView() {
    const { cart, vaciarCarrito, getPrecioTotal } = useContext(contextoApp);

    function handleCheckout(buyerData) {
        const orden = {
            comprador: buyerData,
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
                <ItemCart/>
                <div className='div_precio_total'>
                    <h3 className='precio_total'>Precio total: ${getPrecioTotal()}</h3>
                    <button onClick={() => vaciarCarrito(cart)} className="boton_vaciar-carrito">Vaciar carrito</button>
                    <Form onCheckout={handleCheckout}/>
                </div>
                <Footer/>
            </div>
        )
    }
}
