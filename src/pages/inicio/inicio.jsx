import React from 'react';
import ItemListDestacados, { ItemListOfertas } from '../../components/ItemListContainer/ItemContainer';
import "./inicio.scss";

export default function Inicio() {
    return (
    <div>
        <div className='titulo_categoria'>
            <h3>ELEMENTOS DESTACADOS</h3>
        </div>
        <ItemListDestacados/>
        <div>
        <div className='titulo_categoria'>
            <h3>OFERTAS</h3>
        </div>
        <ItemListOfertas/>
        </div>
    </div>
    )
}
