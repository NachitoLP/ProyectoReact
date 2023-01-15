import "./itemDetail.scss";
import React , {useState, useEffect, useContext} from 'react';
import { getItemDetail } from "../../services/firebase";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { contextoApp } from "../../storage/contextCart";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";

export default function ItemListDetail() {
    const [product, setProduct] = useState([]);
    const [ countInCart,setCountInCart ] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    let id = useParams().id;

    const { agregarCarrito } = useContext(contextoApp);
    
    function handleAddToCart (count) {
        setCountInCart(count);
        agregarCarrito(product,count);
    }

    useEffect( () => {
        getItemDetail(id)
        .then((arrayDetail) => { 
            setProduct(arrayDetail)
            setIsLoading(false)
        })
        .catch((error) => alert("No se encontró el item buscado."))
    }, [id])

    return (
        <div>
            { isLoading? <Loader/>
            :
            <div>
                <div className="div_detail_container">
                    <div className="div_detail">
                        <h3 className="detail_name">{product.nombre}</h3>
                        <img alt={product.nombre} src={product.img} />
                        <p className="detail_price">${product.precio}</p>
                        <p className="detail_text">{product.detail}</p>
                        {countInCart === 0 ? <ItemCount onAddToCart = { handleAddToCart }/> : 
                        <div>
                            <Link to="/carrito" className="link_carrito">Ir al carrito</Link>
                            <Link to="/" className="link_volver_inicio">Seguir comprando</Link>    
                        </div>}
                    </div>
                </div>
                <Footer/>
            </div>
            }
        </div>
    )
}