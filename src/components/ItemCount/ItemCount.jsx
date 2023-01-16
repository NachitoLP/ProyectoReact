import React from 'react';
import "./itemcount.scss";
import { useState } from 'react';
import Button from "../Button/Button"

export default function ItemCount({ onAddToCart }) {
    const [count, setCount] = useState(1)

    function handleAdd() {
        if ( count < 3 ) setCount(count + 1);
    }

    function handleSubstract() {
        if ( count > 1 ) setCount(count - 1);
    }

    return (
        <div>
            <div className='itemCount_container'>
                <Button onClick={handleSubstract} className="restar" text="-"/>
                <span>{count}</span>
                <Button onClick={handleAdd} className="sumar" text="+"/>
            </div>
            <Button onClick={()=> onAddToCart(count)} className="boton_agregar_carrito" text="Agregar al carrito"/>
        </div>
    )
}
