import React from 'react'
import { useState } from 'react';
import "./form.scss";
import InputForm from './InputForm';

export default function Form({onCheckout}) {
    const [buyerData,setBuyerData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    function handleInputChange(evt) {
        let nameInput = evt.target.name;
        let value = evt.target.value;

        const newBuyerData = {...buyerData};
        newBuyerData[nameInput] = value;
        setBuyerData(newBuyerData);
    }

    function onSubmit(evt) {
        evt.preventDefault();
        setBuyerData({
            name: "",
            email: "",
            phone: "",
        })
        onCheckout(buyerData)
    }

    return (
        <form className='form'>
            <InputForm class="input" required name="name" title="Nombre completo" type="text" value={buyerData.name} onChange={handleInputChange}/>
            <InputForm class="input" required name="email" title="Correo Electrónico" type="email" value={buyerData.email} onChange={handleInputChange}/>
            <InputForm class="input" required name="phone" title="Teléfono Celular" type="tel" value={buyerData.phone} onChange={handleInputChange}/>
            <button onClick={onSubmit} className="boton_compra">Finalizar compra</button>
        </form>
    )
}
