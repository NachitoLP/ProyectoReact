import React from 'react';
import "./perfumeria.scss";
import {ItemListPerfumes} from '../../components/ItemListContainer/ItemContainer';

export default function Perfumes() {
    return (
    <div>
        <h3>CÁTALOGO DE PERFUMES</h3>
        <div className='contenedor_categorias_perfumes'>
            <ItemListPerfumes/>
        </div>
    </div>
    )
}