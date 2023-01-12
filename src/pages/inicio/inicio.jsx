import React, { useContext } from 'react';
import ItemListGeneral from '../../components/ItemListContainer/ItemContainer';
import "./inicio.scss";
import { contextoApp } from '../../storage/contextCart';

export default function Inicio() {
    const contextoInicio = useContext(contextoApp)

    return (
    <div>
        <div>
            <div className='titulo_categoria'>
                <h3>PRODUCTOS</h3>
            </div>
            <ItemListGeneral/>
        </div>
    </div>
    )
}
