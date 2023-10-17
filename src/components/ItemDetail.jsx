import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    const filteredProduct = productos.filter((producto) => producto.id == id);
    console.log(filteredProduct);
    return (
        <div>ItemDetail</div>
    )
}

export default ItemDetail