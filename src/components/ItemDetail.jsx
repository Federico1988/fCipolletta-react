import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ productos }) => {
    const { id } = useParams;
    return (
        <div>ItemDetail</div>
    )
}

export default ItemDetail