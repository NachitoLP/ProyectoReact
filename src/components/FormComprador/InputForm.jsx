import React from 'react'

export default function InputForm(props) {
    return (
        <div className='div_form_datos'>
            <label className='titulo_input'>{props.title}</label>
            <input className={props.class} required value={props.value} name={props.name} type={props.type} onChange={props.onChange}/>
        </div>
    )
}
