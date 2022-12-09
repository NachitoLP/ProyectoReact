import "./itemDetail.scss";

export default function ItemDetail(props) {
    const { img, nombre, precio, detail } = props;
    return (
        <div className="div_detail_container">
            <div>
                <img alt={nombre} src={img} />
                <p className="detail_price">{precio}</p>
            </div>
            <div className="div_detail">
                <h3 className="detail_name">{nombre}</h3>
                <p className="detail_text">{detail}</p>
                <div className="div_detail_select">
                    <select name="talle" className="detail_select" required>
                        <option value="S">Seleccione un talle.</option>
                        <option value="1">S "Small"</option>
                        <option value="2">M "Medium"</option>
                        <option value="3">L "Large"</option>
                        <option value="4">XL "Extra Large"</option>
                    </select>
                    {/* button sumar y restar */}
                </div>
                <button className="boton_agregar">Agregar al carrito</button>
            </div>
        </div>
    );
}
