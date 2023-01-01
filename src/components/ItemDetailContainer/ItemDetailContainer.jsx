import "./itemDetail.scss";
import React , {useState, useEffect, useContext} from 'react';
import { getItemDetail } from "../../services/mockServices";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { contextoApp } from "../../storage/contextCart";

export default function ItemListDetail() {
    const [product, setProduct] = useState([]);
    const [ countInCart,setCountInCart ] = useState(0);
    let id = useParams().id;

    const { agregarCarrito } = useContext(contextoApp);
    
    function handleAddToCart (count) {
        setCountInCart(count);
        agregarCarrito(product,count);
    }

    useEffect( () => {
        getItemDetail(id)
        .then((arrayDetail) => { setProduct(arrayDetail)
        })
        .catch((error) => alert("No se encontró el item buscado."))
    }, [])

    return (
        <div className="div_detail_container">
            <div className="div_detail">
                <h3 className="detail_name">{product.nombre}</h3>
                <img alt={product.nombre} src={product.img} />
                <p className="detail_price">{product.precio}</p>
                <p className="detail_text">{product.detail}</p>
                <ItemCount onAddToCart = { handleAddToCart }/>
            </div>
        </div>
    )
}