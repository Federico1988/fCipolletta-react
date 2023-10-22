import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <div>
            {
                products.map((prod) => {
                    return (
                        <Item
                            key={prod.id}
                            category={prod.category}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                        />
                    )
                })
            }

        </div>
    )
}

export default ItemList
