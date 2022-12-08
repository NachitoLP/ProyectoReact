import React, {useState, useEffect} from 'react';
import "./button.scss"

export default function Button() {
    const [isFavorite, setFavorite] = useState(false);

    function favorito() {
        isFavorite === true ? setFavorite(false) : setFavorite(true);
    }

    return (
    <div>
        <button className={isFavorite? "boton_favorito":"boton_no_favorito"} onClick={favorito}>❤</button>
    </div>
    )
}
