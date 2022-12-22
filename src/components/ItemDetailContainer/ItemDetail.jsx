import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.scss";

export default function ItemDetail(props) {
    const { img, nombre, precio, detail } = props;
    return (
        <div className="div_detail_container">
            <div className="div_detail">
                <h3 className="detail_name">{nombre}</h3>
                <img alt={nombre} src={img} />
                <p className="detail_price">{precio}</p>
                <p className="detail_text">{detail}</p>
                <ItemCount/>
                <button className="boton_agregar">Agregar al carrito</button>
            </div>
        </div>
    );
}
