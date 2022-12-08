import "./navbar.scss";
import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";


export default function NavBar() {
    return (
        <div className="navbar">
            <div className="imagen_logo">
                <img src="https://blog.logrocket.com/wp-content/uploads/2021/06/react-icons-comprehensive-tutorial-examples.png" alt="icono react" />
            </div>  
            <ul className="navbar_list">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/ropa">Ropa</Link></li>
                <li><Link to="/perfumeria">Perfumeria</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <div className="logo_carrito">
                    <CartWidget/>
                </div>
            </ul>
            
        </div>
    );
}
