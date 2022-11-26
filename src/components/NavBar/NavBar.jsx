import "./navbar.scss";
import React from 'react';
import CartWidget from "../CartWidget/CartWidget";


export default function NavBar() {
    return (
        <div className="navbar">
            <div className="imagen_logo">
                <img src="https://blog.logrocket.com/wp-content/uploads/2021/06/react-icons-comprehensive-tutorial-examples.png" alt="icono react" />
            </div>  
            <ul className="navbar_list">
                <li><a href="#">Ropa</a></li>
                <li><a href="#">Perfumería</a></li>
                <li><a href="#">Gaming</a></li>
                <li><a href="#">Contacto</a></li>
                <div className="logo_carrito">
                    <CartWidget/>
                </div>
            </ul>
            
        </div>
  );
}
