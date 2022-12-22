import React from 'react';
import "./itemcount.scss";
import { useState } from 'react';

export default function ItemCount({ stock }) {
    const [count, setCount] = useState(1)

    function handleAdd() {
        if ( count < 3 ) setCount(count + 1);
    }

    function handleSubstract() {
        if ( count > 1 ) setCount(count - 1);
    }

    return (
        <div className='itemCount_container'>
            <button onClick={handleSubstract} className="restar">-</button>
            <span>{count}</span>
            <button onClick={handleAdd} className="sumar">+</button>
        </div>
    )
}
