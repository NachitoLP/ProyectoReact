import React from 'react';
import ItemListGeneral from '../../components/ItemListContainer/ItemContainer';
import "./inicio.scss";

export default function Inicio() {
    return (
    <div>
        <div className='titulo_categoria'>
            <h3>PRODUCTOS</h3>
        </div>
        <ItemListGeneral/>
    </div>
    )
}
