import React from 'react';
import "./ropa.scss";
import {ItemListOtro, ItemListPantalon, ItemListRemera} from '../../components/ItemListContainer/ItemContainer';

export default function Ropa() {
    return (
    <div>
        <h3>CATÁLOGO DE ROPA</h3>
        <div className='contenedor_categorias_ropa'>
            <ItemListRemera/>
            <ItemListPantalon/>
        </div>
        <ItemListOtro/>
    </div>
    )
}
