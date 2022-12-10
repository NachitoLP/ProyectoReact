import "./itemDetail.scss";
import React , {useState, useEffect} from 'react';
import { getItemDetail } from "../../services/mockServices";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemListDetail() {
    const [detail, setDetail] = useState([]);
    let id = useParams().id;

    useEffect( () => {
        getItemDetail(id)
        .then((arrayDetail) => { setDetail(arrayDetail)
        })
        .catch((error) => alert("No se encontró el item buscado."))
    }, [])

    return (
        <ItemDetail
            img = {detail.img}
            nombre = {detail.nombre}
            detail = {detail.detail}
            precio = {detail.precio}
        />
    )
}